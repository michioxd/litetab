import Style from './../Setting.module.scss';
import logoLight from './../../../../public/images/litetab-full-light.png';
import logoDark from './../../../../public/images/litetab-full-dark.png';

export default function SettingAbout() {
    return (
        <>
            <h3>About litetab</h3>
            <div className={Style.Content}>
                <div className={Style.Center}>
                    <img srcSet={logoLight} width="80%" className='dark' />
                    <img srcSet={logoDark} width="80%" className='light' />
                    <h4 style={{ marginTop: 10 }}>a light design for chrome new tab</h4>
                    <p style={{ fontSize: '12px', marginTop: 20 }}>brought to you with much &hearts; from michioxd and all contributors!</p>
                </div>
            </div>

        </>
    )
}