//getWeatherTextの作成，天気，気温，湿度の入手(12時時点の)
function getWeatherText() {
    const url ='https://api.openweathermap.org/data/2.5/forecast'
        + `?lat=${CONFIG.LAT}&lon=${CONFIG.LON}`
        + `&appid=${CONFIG.OWM_KEY}&units=metric&lang=ja`;
  
        try {
            const res = UrlFetchApp.fetch(url);
            const data = JSON.parse(res.getContentText());

            const target = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy--MM-dd' )+ '12:00';
            const item = data.list.find(f => 
                Utilities.formatDate(new Date(f.dt * 1000),'Asia/Tokyo', 'yyyy-MM-dd HH:mm') === target

            ) || data.list[0];

            return `天気: ${item.weather[0].description}\n`
                    +`気温: ${Math.round(item.main.temp)}°C\n`
                    +`湿度: ${item.main.humidity}%`;
        }catch (e) {
            console.error('転機の取得に失敗:',e);
            return '天気: 取得できませんでした';
        }
    }
            

            
        
    

 
