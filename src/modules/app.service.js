export default class AppService { // Благодаря default, мы получаем не объект, а возвращаем непосредственно данный класс
  constructor(text) {
    this.text = text
  }

  log() {
    console.log('[App service]:', this.text);
  }
}
