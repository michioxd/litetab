import { useState } from 'react';
import Style from './Setting.module.scss';
import { clsx } from 'clsx';
import SettingAbout from './pages/about';

const SettingMenuItem = ({
    icon,
    text,
    onClick
}: {
    icon?: string,
    text?: string,
    onClick?: () => void
}) => (
    <div className={Style.Item} onClick={onClick}>
        <span className={clsx("material-icons", Style.icons)}>
            {icon}
        </span>
        <span className={Style.text}>
            {text}
        </span>
    </div>
)


export default function Setting({
    opened,
    close
}: {
    opened?: boolean,
    close?: () => void
}) {
    const [currentPage, setCurrentPage] = useState<number>(0);
    return (
        <div className={clsx(Style.Setting, opened && Style.Open)}>
            <div className={Style.SettingOverlay} onClick={close} />
            <div className={Style.SettingMain}>
                <div className={Style.SettingMenu}>
                    <SettingMenuItem icon={'dashboard'} text={'Layout'} onClick={() => setCurrentPage(0)} />
                    <SettingMenuItem icon={'image'} text={'Background'} onClick={() => setCurrentPage(1)} />
                    <SettingMenuItem icon={'search'} text={'Search'} onClick={() => setCurrentPage(2)} />
                    <SettingMenuItem icon={'schedule'} text={'Clock'} onClick={() => setCurrentPage(3)} />
                    <SettingMenuItem icon={'info'} text={'About'} onClick={() => setCurrentPage(4)} />
                </div>
                <div className={Style.SettingContent}>
                    {
                        currentPage === 4 && (
                            <SettingAbout />
                        )
                    }
                </div>
            </div>
        </div>
    )
}