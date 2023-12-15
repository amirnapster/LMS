import os
import re

# Define the directory you want to start from
rootDir = '.'

for dirName, subdirList, fileList in os.walk(rootDir):
 for fname in fileList:
     if fname.endswith('.tsx'): # Check if the file is a JavaScript file
         fpath = os.path.join(dirName, fname)
         with open(fpath, 'r',encoding="utf-8") as f:
             lines = f.readlines()
         with open(fpath, 'w',encoding="utf-8") as f:
             inside_import = False
             import_block = []
             for line in lines:
                if 'import {' in line:
                    inside_import = True
                    import_block.append(line)
                if inside_import:
                    if 'import {' not in line:
                        import_block.append(line)
                    if '} from \'@mui/icons-material\'' in line:
                        inside_import = False
                        # Extract the names of the imported icons
                        importtext=str.replace(''.join(import_block),'\n','')
                        names = re.findall(r'{.+}',importtext )[0].replace('{','').replace('}','')
                        icon_names =str.split(names,',')
                        # Replace the line with single import statements
                        for name in icon_names:
                            if name.strip()!='':
                                f.write(f'import {name} from \'@mui/icons-material/{name.strip()}\'\n')
                        import_block = []
                    elif '}' in line:
                        for l in import_block:
                            f.write(l)
                        import_block=[]
                        inside_import=False
                else:
                    f.write(line)
