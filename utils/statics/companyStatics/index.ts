import type { CompanyActiveTabType } from 'libs/redux/slices/company/interface'
import type {
  CompanyHeaderSubTabItemsType,
  contractItemsType,
  ICompanyWebsiteItems,
  PolicyItemsType,
} from './interface'

export const PolicyItems: PolicyItemsType = {
  'قوانین و مقررات استفاده از رسمیو':
    'سامانه رسمیو پلتفرم تحلیل و ارتباط کسب و کارهاست و کلیه حقوق قانونی مادی و معنوی آن متعلق به شرکت پیشگامان رسمی پردازش دانا (سهامی خاص) به شماره ثبت 564196 و شناسه ملی 14009396050 است. خدماتی که در سامانه و وب سایت Rasm.io در دسترس شما است توسط شرکت پیشگامان رسمی پردازش دانا ارائه می‌شود. سامانه رسمیو به عنوان پلتفرم تحلیل و ارتباط کسب و کارها، یک بستر تجاری بین شرکت ها (B2B) فراهم می آورد که اجازه امکان تبادل اطلاعات، نمایش و معرفی شرکت، ارائه محصولات و خدمات تجاری بین عرضه کننده محصول/خدمات و خریدار را می دهد. رسمیو همچنین بستر معاملات را برای اعضای خود به منظور قرار دادن، قبول، انجام، مدیریت و اجرای سفارش ها برای تأمین محصولات و ارائه خدمات از طریق وبسایت بر اساس این شرایط و مقررات و سایر دستورات و رهنمودهای مورد نظر شرکت فراهم می آورد. بنابراین رسمیو در یک معامله مشخص، نماینده هیچ یک از طرفین (فروشنده یا خریدار) نمی باشد و تحت هیچ شرایطی در هیچ معامله تجاری یا بازرگانی بین کاربران وارد نشده و هیچ نظارت و کنترل و تأییدی بر روی آن معاملات ندارد و به هر نحو و تحت هیچ شرایطی مسئولیتی در این خصوص ندارد.',
  'قواعد کلی':
    'شرایط و قوانین ذکر شده در این بخش شامل همه سامانه است. کلیه اصول و رویه‏‌های سامانه دقیقاً منطبق با قوانین جاری جمهوری اسلامی ایران، قانون تجارت الکترونیک، قانون حمایت از حقوق مصرف کننده بوده و متعاقبا کاربران نیز موظف به رعایت قوانین مرتبط با کاربر می باشند. قوانین و مقررات مندرج ممکن است بسته به شرایط و در طول زمان تغییر یابد، در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های رسمیو تغییراتی در آینده ایجاد شود، در همین صفحه منتشر و بروزرسانی خواهد شد. بنابراین این توافق نامه مبنای ارائه خدمات به کاربران گرامی است. استفاده از خدمات رسمیو بدین معناست که کاربران کلیه شروط و مندرجات این توافق نامه را مطالعه و از مفاد آن آگاهی یافته و با پذیرش آن درخواست خدمات می نمایند. در هر موردی که ابهامی در خصوص مفاد این تفاهم نامه وجود دارد، کاربران می توانند از طریق بخش تماس با ما با کارشناسان رسمیو ارتباط برقرار نمایند و اطلاعات مورد نیاز را دریافت نمایند. در هر حال رعایت شرایط برای بهره‌گیری از خدمات سامانه رسمیو ضروری است. طبق اصل ظهور، چنانچه به نمایندگی از شرکت یا شخص حقوقی اقدام به قبول این شرایط و مقررات می نمایید، تضمین و تعهد می نمایید که دارای اختیارات لازم برای ایجاد تعهد برای شرکت یا شخص حقوقی مزبور در خصوص این شرایط و مقررات می باشید. به هر حال، در صورت عدم وجود این اختیار، این بدین معنی نیست که شرکت یا شخص حقوقی متبوع کاربر تابع این شرایط و مقررات نباشند. در هر صورت رسمیو هیچ‌گونه مسئولیتی در مقابل حقوق و ادعاهای اشخاص ثالث ندارد. در صورتی که تشخیص داده شود که کاربر قوانین و مقررات رسمیو یا سایر قوانین و مقررات را نقض نموده است، وب سایت می تواند به سرعت هر کدام از محتویات و داده های ثبت نامی و عضویتی و همچنین هرگونه ارتباط وب سایت های دیگر را متوقف کند. رسمیو می تواند در هر زمان بنا به تشخیص خود نسبت به تعلیق عضویت کاربران یا حذف عضویت اقدام نماید. لطفا قبل از استفاده از وب سایت رسمیو، شرایط قرارداد را به دقت مطالعه کنید. با استفاده و یا دسترسی به هر قسمت، شما موافقت خود را با شرایط و ضوابط موجود در این قرارداد اعلام کرده اید. اگر با همه یا قسمتی از این قرارداد موافق نیستید، لطفا از سایت استفاده نکنید.',
  'حساب کاربری':
    'رسمیو شما را به درخواست خودتان، به عضویت سامانه آنلاین خود در می آورد و استفاده شما از این وب سایت و هرگونه خدمات آن بر اساس این شرایط و مقررات خواهد بود.  شما به عنوان کاربر اذعان می‌دارید که با میل و اراده خود در راستای فعالیتهای مستقل شخصی، تجاری و حرفه ای خود اقدام به ثبت نام به عنوان کاربر یا عضو می نمایید و یا از خدمات رسمیو استفاده می‌کنید. شما مسئول این هستید که نام کاربری و رمز ورود خود را محرمانه نگه دارید. لطفا در زمان ثبت نام و احراز هویت، اطلاعات شخصی خود از جمله نام و نام خانوادگی، آدرس ایمیل و شماره موبایل را به درستی و با دقت وارد کنید زیرا از اطلاعاتی که در زمان ثبت نام وارد می‌کنید برای تعریف نام کاربری‌تان در وبسایت و تخصیص خدمات استفاده می شود. در صورتی که مشخصات خود را اشتباه نوشته باشید، رسمیو حضور و بهره برداری بدوِن مشکِل شما از خدمات وب سایت را تضمین نمی کند. شما مجاز نیستید که نام کاربری و رمز ورود خود را در اختیار شخص دیگری قرار دهید، و یا به کسی اجازه دهید که به حساب کاربری شما و امکانات و ویژگی های تخصیص یافته، دسترسی پیدا کند. شما مسئول تمام استفاده‌ای هستید که از وبسایت و داده‌های در ارتباط با حساب شما و نام کاربری و رمز ورود شما انجام می‌گیرد. همچنین مسئولیت صحت اطلاعاتی که در حساب خود وارد می‌کنید، تماما با خود شما است. مشخصات هویتی و اطلاعات تماس شما همچون آدرس ایمیل و شماره موبایل و نیز کم و کیف فعالیت شما در وب سایت رسمیو با رعایت بالاترین استانداردهای امنیتی نزد ما محرمانه خواهد بود و جز با درخواست رسمی نهادهای ذی ربط به هیچ عنوان افشا نخواهد شد و در اختیار دیگران قرار نخواهد گرفت.',
  'مسئولیت مشارکت کننده ها':
    'مسئولیت تهیه محتوا، صحت، به موقع بودن، طرح و کامل بودن اطلاعاتی که توسط کاربر (شما) در وب سایت درج می گردد تماماً بر عهده کاربر(شما) می باشد. شما به عنوان کاربر رسمیو صراحتا اقرار می نمایید که این اطلاعات مطابق با قوانین و مقررات سامانه تهیه گردیده است. لذا رسمیو از هر گونه ادعایی از طرف کاربران مبری است و از هرگونه ضمانت‌اجرا یا دعوایی که علیه اش به خاطر نقض تعهدات کاربران متحمل میشود مصون میباشد. شما به عنوان کاربر بدینوسیله متعهد می گردید تا محصولات/خدماتی را که بر اساس این شرایط و مقررات ممنوع یا غیر مناسب می باشند یا به هر نحو حقوق اشخاص ثالث یا قوانین و مقررات حاکم را نقض می نماید را در وب سایت درج نکنید و آنها را نمایش ندهید. در این خصوص قوانین و مقررات لازم‌الاجرا در جمهوری اسلامی ایران ملاک عمل می‌باشد. رسمیو هیچ‌گونه مسئولیتی بابت نقض این قوانین و مقررات و پاسخگویی به مراجع قانونی یا اشخاص حقیقی و حقوقی مدعی نخواهد داشت. کاربران مکلفند از جزئیات تماس سایر کاربران فقط برای اهداف تجاری، بررسی محصولات و امور مرتبط با آن و پیگیری های بعدی استفاده نمایند، لذا رسمیو مسئولیتی در برابر رفتار ناشایست و سوءاستفاده کاربران ندارد. همچنین کاربران تعهد می نمایند که رسمیو را از هر دعوی در این خصوص مصون بدارند. رسمیو مسئولیتی برای فراهم‌آوری امکان تماس و برقراری ارتباط فراتر از آن را نداشته و همچنین مسئولیتی برای صحت اطلاعات تماس کاربران یا پاسخگوئی آنها ندارد. اگر شما محتوایی( اعم از متنی، بارگذاری محصول و خدمت و…) در وبسایت پست میکنید، لینکی در آن میگذارید و یا چیزهای دیگر از طریق وبسایت در دسترس قرار می‌دهید، مسئول تمام و کمال آن محتوا و هر ضرر و خسارتی که از طریق این محتوا ایجاد شود، هستید. این مسئله برای هر نوع محتوایی شامل نوشته، تصویر، گرافیک و نرم افزار کامپیوتری است. با در دسترس قرار دادن محتوا، شما تضمین می‌کنید: دانلود کردن، کپی کردن، و استفاده از این محتوا حقوق مالکیت را نقض نمیکند، که این شامل حق کپی، حق ثبت اختراع، حقوق رازداری تجاری و حقوق علائم تجاری، هم از هر شخص سومی می‌شود. اگر کارفرمای شما حق مالکیت معنوی آن چه شما خلق می‌کنید را دارد، شما یا (۱) از کارفرمایتان اجازه رسمی برای پست کردن و در دسترس گذاشتن محتوای مربوطه که میتواند شامل هر نرم‌افزاری هم باشد، را دارید. یا (۲) حق مالکیت کارفرمایتان را از حقوق مربوط به آنچه خلق کردید و یا محتوای آن باطل کرده اید. محتوا شامل هر نوع ویروس، کرم یا بدافزار، تروجان، اسب‌های تروجان و یا دیگر محتوای مخرب و یا نصب آن‌ها نمی‌شود. شما به طور کامل از یک مجوز و شخص ثالث مربوط به محتوا پیروی کرده، و اقدامات لازم برای به دست آوردن شرایط مورد نیاز کاربر نهایی آن محتوا را انجام داده‌اید. محتوا اسپم نیست، توسط ماشین و یا به صورت تصادفی تولید نشده است، و شامل محتوای غیراخلاقی و یا ناخواسته ی تجاری که برای ایجاد ترافیک برای سایت های شخص سوم طراحی شده اند، و یا هدفشان افزایش رتبه ی جستجوی سایت های دیگر است؛ نیست، و در ضمن شامل اعمال غیرقانونی (مانند فیشینگ) و یا برای گمراهی دریافت‌کننده های آن در دسترسی به منبع محتوا (مثل حقه بازی) ساخته نمی‌شود. محتوا پورنوگرافی نیست و حاوی تهدید، و یا خشونت نیست، و حریم خصوصی و یا حقوق عمومی شخص سوم را نقض نمی‌کند. محتوا هیچ کدام از قوانین جمهوری اسلامی ایران را نقض نمی‌کند. محتوای شما از طریق پیام های الکترونیکی ناخواسته مانند لینک های اسپم در گروه های خبری، لیست ایمیل‌ها، وبلاگ‌ها و وب‌سایت‌ها، و روش های تبلیغاتی ناخواسته ی مشابه تبلیغ نمی‌شود. محتوای شما به شیوه‌ای که خوانندگان آن را گمراه کند که شما فرد یا شرکت دیگری هستید، نام گذاری نمی شود. در مورد محتوایی که شامل کد کامپیوتری و یا دستورالعمل مشخصی است، شما نحوه ی استفاده، ماهیت، تاثیرات آن را توصیف میکنید و یا آن را به دقت طبقه بندی کرده‌اید، چه به درخواست رسمیو و چه در غیر این صورت.',
  'مسئولیت بازدیدکننده های وب سایت':
    'رسمیو همه ی محتوای موجود بر روی پلتفرم خود را بازبینی نکرده و نمی‌تواند بازبینی کند. و در نتیجه مسئول انواع محتوای سایت، استفاده ها و یا تاثیر این محتوا نخواهد بود. با استفاده از وب سایت، رسمیو نماینده و یا ضامن محتوای پست شده در آن نیست، و همه ی محتوایش را لزوما تایید نمی‌کند و عقیده ندارد همه ی این محتواها مفید و یا غیرمضر هستند. شما مسئولید که اقدامات احتیاطی لازم برای محافظت از خودتان و سیستم‌های کامپیوتری‌تان از ویروس‌ها، بدافزارها، اسب های تروجان و یا سایر مطالب مضر و مخرب را انجام دهید. وبسایت ممکن است شامل محتوایی توهین‌آمیز، زشت و یا ناشایست باشد، و یا محتوایی که از لحاظ فنی غیردقیق، دارای اشتباهات نوشتاری و اشتباهات دیگر باشد. این وبسایت ممکن است حاوی محتوایی باشد که حریم خصوصی و یا حقوق عمومی را نقض میکنند و حق مالکیت و سایر حقوق انحصاری شخص سوم را زیر پا می‌گذارند و یا دانلود و کپی کردن یا استفاده از آن منوط به شرایط و ضوابط اظهار شده نباشد. رسمیو هرگونه مسئولیتی برای هرگونه آسیب ناشی از استفاده توسط بازدیدکنندگان از وب سایت و همین طور آسیب ناشی از محتوای موجود بر روی سایت را از خود سلب می‌کند.',
  'محتوای سایت های دیگر':
    'ما نمیتوانیم همه‌ی محتوا و مطالب موجود بر روی لینک های به اشتراک گذاشته شده بر روی سامانه رسمیو را بازبینی کنیم. رسمیو هیچ کنترلی بر دامنه های غیر مرتبط به رسمیو ندارد، و مسئول محتوای آن‌ها نیست. با قرار دادن لینک های شرکت‌های دیگر بر روی سایت،‌ رسمیو آن‌ها را ضمانت یا پشتیبانی نمیکند. لازم است شما اقدامات احتیاطی لازم برای محافظت از خودتان و سیستم‌های کامپیوتری تان را انجام دهید. رسمیو هرگونه مسئولیتی برای آسیب‌های ناشی از نحوه ی استفاده ی شما از وبسایت ها و صفحات خارج از دامنه ی رسمیو بر عهده نمیگیرد.',
  'نقض قوانین حق تکثیر و سیاست DMCA':
    'به همون صورتی که رسمیو از دیگران می‌خواهد که به حقوق مالکیت احترام بگذارند، خود نیز به حقوق مالکیت دیگران احترام می‌گذارد. اگر باور دارید محتوایی که در دامنه ی رسمیو قرار گرفته و یا لینک داده شده،‌ حق کپی را برای شما نقض میکند، تشویقتان میکنیم که با توجه به سیاست (“DMCA (“Digital Millennium Copyright Act به رسمیو اطلاع دهید. رسمیو به همه ی چنین یادآوری هایی واکنش نشان میدهد و اقدام‌های لازم شامل حذف آن محتوا و یا لینک هایی که حقوق مالکیت را نقض میکنند را انجام خواهد داد. رسمیو در صورتی که یک بازدید کننده، موارد متعددی را از حقوق مالکیت رسمیو و یا شخص سوم های دیگر را نقض کند، دسترسی او به وبسایت خود را قطع می‌کند.',
  'مالکیت معنوی':
    'نام «رسمیو»، لوگو و سایر علائم تجاری ثبت شده، محصولات و خدمات درج شده در سایت متعلق به شرکت است و بدون کسب اجازه کتبی، هرگونه کپی‌برداری و استفاده از موارد فوق ممنوع خواهد بود. علاوه بر این، اسناد، توافقنامه‌‏ها، فرم‏‌ها، درخواست‏‌ها، طرح سربرگ صفحات، شکل‌های گرافیکی و دکمه‌ها، کلیه محتویات وب‌سایت، اطلاعات، طراحی، متون، گرافیک، نرم‌افزار، عکس، ویدئو، فایل صوتی و موارد مشابه، و همچنین کدهای نرم‌افزاری در مالکیت انحصاری شرکت بوده و بدون کسب اجازه کتبی، کپی‌برداری از آنها ممنوع است. مالکیت و منافع کلیه حقوق سایت رسمیو و مندرجات آن منحصرًا متعلق به شرکت خواهد بود. همچنین کلیه محتویات وب‌سایت نیز مشمول قانون کپی‌رایت (مالکیت حقوق معنوی) می‌شود.',
  تبلیغات: 'رسمیو حق چاپ تبلیغ در محتوای شما را برای خود محفوظ نگه می‌دارد.',
  تغییرات:
    'رسمیو حق تغییر یا جایگزین کردن هر قسمتی از این توافق نامه را به صلاحدید خود قائل است. وظیفه ی شماست که این قرارداد را در طول زمان برای آگاهی از تغییرات آن دنبال کنید. ادامه ی استفاده از وبسایت توسط شما به معنای موافقت شما از تغییرات احتمالی این قراردادنامه در زمان استفاده ی شماست. همچنین رسمیو ممکن است در آینده سرویس ها و خدمات جدیدی ارائه دهد که استفاده از همه ی آن‌ها شامل پذیرش شرایط این تعهدنامه است.',
  فسخ: 'رسمیو ممکن است دسترسی شما به همه و یا قسمت هایی از سایت را در هر زمانی با دلیل یا بی دلیل، با هشدار یا بی هشدار و یا فوری متوقف کند. اگر شما مایلید هر قسمتی از این قرارداد را نقض کنید و یا حساب کاربری خود را ببندید، کافی است دیگر از سایت استفاده نکنید. همه مفاد این توافقنامه که طبیعتا باید از فسخ آن جلوگیری کنند، از فسخ جلوگیری میکنند؛ از جمله مقررات مالکیت، سلب مسئولیت از ضمانت، غرامت ها و مسئولیت محدود.',
  'سلب مسئولیت از ضمانت':
    'این وبسایت همانگونه که هست ارائه شده است. رسمیو و تامین کننده ی آن بدینوسیله تمام ضمانت از هر نوع مسئولیتی بابت استفاده وبسایت را از خود سلب میکنند.',
  'مسئولیت محدود':
    'در هیچ صورتی رسمیو و یا تامین کننده آن، در قبال رابطه با هر موضوع این شرایط تحت هر قرارداد، اهمال، مسئولیت سخت و یا دیگر نظریه های حقوقی یا عادلانه برای موارد زیر مسئولیتی به عهده نمیگیرد: (۱) هر خسارت ویژه، ضمنی یا تبعی؛ (۲) هزینه های خرید برای محصولات یا خدمات جایگزین؛ (۳) برای قطع استفاده و یا از دست دادن و یا از بین رفتن داده‌ها؛ (۴) برای هر مقدار که بیش از هزینه تحت این قرارداد در طول دوره دوازده ماه پرداخت شده توسط شما به رسمیو قبل از رویداد پیش بینی نشده. رسمیو هیچ مسئولیتی در قبال هر شکست و یا تاخیر به دلیل مسائل خارج از کنترل خود را ندارند. موارد فوق به حدود ممنوع شده توسط قانون اعمال نمی شود.',
  'نمایندگی عمومی و گارانتی':
    'شما ضمانت میکنید که (۱) استفاده شما از وب سایت بر اساس رعایت کامل سیاست حریم خصوصی رسمیو سیاست حفظ حریم خصوصی به همراه این موافقتنامه و با همه قوانین و مقررات (از جمله هر گونه قوانین محلی و یا مقررات کشور ایران، دولت ایران، با توجه به رفتار آنلاین و محتوای قابل قبول، و از جمله تمام قوانین مربوط به انتقال اطلاعات فنی صادر شده از ایران یا کشور محل سکونت شما) خواهد بود و (۲) استفاده شما از وب سایت حقوق مالکیت معنوی هیچ شخص ثالثی را نقض نمیکند.',
  'پرداخت غرامت':
    'شما توافق می کنید که در برابر هر ادعا و هزینه‌ ای که به رسمیو، پیمانکاران آن، و مجوز آن، و مدیران مربوطه، کارکنان و عوامل نگه ‌دارنده،‌ وارد میکنید، از جمله هزینه وکیل، هزینه ی ناشی از استفاده شما و یا هزینه ی تخلف از این قرارداد غرامت بپردازید.',
  متفرقه:
    'استفاده از خدمات سایت به منزله توافق کامل بین رسمیو و شما در مورد موضوع و مفاد این توافقنامه است و شرایط آن ممکن است تنها توسط یک اصلاحیه نوشته شده امضا شده توسط یک مدیر اجرایی مجاز رسمیو، و یا با ارسال یک نسخه اصلاح شده تغییر یافته توسط رسمیو تغییر کند.',
}

export const companyWebsiteItems: ICompanyWebsiteItems[] = [
  { type: 'rate', title: 'تعداد ستاره مجوز', emptyState: 'ثبت نشده' },
  { type: 'supportTel', title: 'تلفن پشتیبانی', emptyState: '_' },
  { type: 'supportEmail', title: 'ایمیل پشتیبانی', emptyState: 'ثبت نشده' },
]

export const companyHeaderTabItems: CompanyActiveTabType[] = [
  'about.company',
  'persons',
  'contact.company',
]

export const companyHeaderSubTabItems: CompanyHeaderSubTabItemsType = [
  { subTitle: 'اطلاعات پایه', link: 'baseInfo' },
  { subTitle: 'محصولات و خدمات', link: 'products' },
  { subTitle: 'لیستهای شرکت', link: 'lists' },
  { subTitle: 'کارخانه و ظرفیت تولید', link: 'production' },
  { subTitle: 'مجوزها و مالکیت‌ها', link: 'certificate' },
  { subTitle: 'مالی', link: 'financial' },
  { subTitle: 'بازرگانی', link: 'business' },
  { subTitle: 'اخبار', link: 'news' },
  { subTitle: 'دیدگاه کاربران', link: 'comments' },
]

export const contractItems: contractItemsType = {
  ContractSignDate: 'تاریخ شروع : ',
  Part2NationaCode: 'شناسه ملی پیمانکار : ',
  CEOName: 'نام مدیرعامل : ',
  NonCashPrice: 'مبلغ غیر نقد (ریال) : ',
  CashPrice: 'مبلغ نقد (ریال) : ',
  AttachmentInfo: 'اطلاعات الحاقيه : ',
  ContractDuration: 'مدت قرارداد : ',
  ContractorSelectionMethod: 'روش انتخاب پیمانکار : ',
  ContractorFinancialCode: 'کد اقتصادی پیمانکار : ',
  VATAvailability: 'مالیات بر ارزش افزوده دارد؟',
  WinnerSelectionMethod: 'روش تعیین برنده : ',
  'Assistant(Supervisor)': 'معاون (ناظر) : ',
  SignHolderRepresentativeFromOrganization:
    'امضا کننده قرارداد از طرف کارفرما : ',
  CommissionMembers: 'اعضای کمیسیون : ',
  RequestNumber: 'شماره درخواست : ',
  AttachmentAvailability: 'الحاقیه : ',
  DestinationExecutionUnit: 'واحد اجرایی : ',
  DraftCreationFinancialYear: 'سال مالی پیش نویس : ',
  DraftNumber: 'شماره پیش نویس : ',
  DraftType: 'نوع پیش نویس : ',
  ImplementationDate: 'تاریخ اجرا : ',
  BrokerName: 'کارگزار : ',
}
