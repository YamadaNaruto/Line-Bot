
//他の関数からのデータをまとめてラインに通知する，実際の動きの部分のgas
function moringNotification(){
    // 朝7:30になったらラインに通知を送るコード
    const today = new Date();
    const weather = getWeatherText();
    const todayEvs = getTodayEvents();
    const reminders = getUpcomingReminders();

    let msg = `[今日は]${Utilities.formatDate(today, 'Asia/Tokyo', 'M/d (E)')}\n`;
    msg += '-------------------------\n';
    msg += weather+ '\n\n';

    msg += '今日のスケジュール\n';
    msg += todayEvs.length
        ? todayEvs.map(e => `${e.time} ${e.title}`).join('\n')
        : 'enjoy freely today';

    if (reminders.length > 0) {
        msg += '\n\nリマインダー\n';
        msg += reminders.map(r =>
            `[${r.days}日後] ${r.title} (${Utilities.formatDate(r.date, 'Asia/Tokyo', 'M/d')})`
        ).join('\n');
    }
    sendLine(msg);
    console.log(msg);

}
function doGet() {
  return ContentService.createTextOutput('LINE Bot is running');
}
