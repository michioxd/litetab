import Style from './Clock.module.scss';

export default function Clock() {
    return (
        <div className={Style.Clock}>
            <div className={Style.ClockAndroidTv}>
                <div className={Style.MainClock}>
                    <div className={Style.Time}>
                        12:00
                    </div>
                    <div className={Style.Date}>
                        August 10, 2022
                    </div>
                </div>
            </div>
        </div>
    )
}