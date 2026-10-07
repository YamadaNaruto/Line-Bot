
//他の関数からのデータをまとめてラインに通知する，実際の動きの部分のgas
function moringNotification(){
    // 朝7:30になったらラインに通知を送るコード
    const today = new Date();
    const weather = getWeatherText();
    const todayEvs = getTodayEvents();
    const reminders = getUpcomingReminders();

    let msg = `[今日は]${FormData(today)}\n`;
    msg += '-------------------------\n';
    msg += weather+ '\n\n';

    msg 

}