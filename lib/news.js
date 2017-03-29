const request = require('request');

class News {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  getData(callback) {
    if (this.data) {
      callback(null, this.data)
    }
    else {
      this.fetchNews(callback);
    }
  }


  fetchNews(callback) {
    let url = 'https://newsapi.org/v1/articles?source=cnn&apiKey='.concat(this.apiKey);

    request({url: url}, (error, response, body) => {
      if (!error) {
        this.data = [];
        body = JSON.parse(body);
        let articles = body.articles;
        for (var i = 0; i < articles.length; i++) {
          this.data[i] = {};
          this.data[i].title = articles[i].title;
          this.data[i].description = articles[i].description;
          this.data[i].url = articles[i].url;
          this.data[i].image = articles[i].urlToImage;
        }
        callback(null, this.data);
      }
      else {
        callback(new Error(error));
      }
    });
  }
}

module.exports = News;