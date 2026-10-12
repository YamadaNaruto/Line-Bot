//設定値とかの設定
//秘密情報はスクリプトプロパティから読む（Apps Script では .env は使えない）
const PROPS = PropertiesService.getScriptProperties();

const CONFIG = {
    //LINE
    LINE_TOKEN: PROPS.getProperty('LINE_TOKEN'),
    LINE_USER_ID: PROPS.getProperty('LINE_USER_ID'),

    //(OpenWeatherMap)
    OWM_KEY: PROPS.getProperty('OWM_KEY'),
    //大阪府茨木市
    LAT:34.8164,
    LON:135.5683,

    //calender
        
    CALENDAR_ID: 'primary', 
    DEFAULT_REMIND_DAYS: 3,
    SAME_DAY_KEYWORDS: ['バイト','MTG'],
    
    NOTIFIED_KEY: 'notified_events',

};