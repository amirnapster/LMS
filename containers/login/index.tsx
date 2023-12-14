import { useRouter } from 'next/router'
import { ArrowRightIcon } from 'assets/icons'

import Row from 'components/ui/Row'
import Button from 'components/ui/Button'
import Authentication from 'containers/authentication'

import styles from './login.module.scss'

const Login = () => {
    const { push } = useRouter()


    const handleBack = () => {
        if (window.history.length > 1) {
            window.history.back()
            return
        }
        push('/')
    }


    return (
        <Row className={styles['login']}>
            <div className={styles['login--contentWrapper']}>
                <Button
                    ripple
                    data-selector='return'
                    onClick={handleBack}
                    btnType='ghost'
                >
                    <ArrowRightIcon />
                    <span>بازگشت</span>
                </Button>
                <Authentication />
            </div>

            <video
                playsInline style={{ objectFit: "contain", maxHeight: "500px" }}
                className={styles['login--artWrapper']}
                poster="https://namatek.com/wp-content/uploads/2021/12/Namatek-Intro-Cover.jpg" preload="auto" controls
                src="https://namatek.com/wp-content/uploads/2022/02/Namatek.mp4" />


        </Row>
    )
}

export default Login
