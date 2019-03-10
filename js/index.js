function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const boxQuotes = [
{ quote: "Research not to discover what's already there, but to discover what's not.", author: "Samadara Ginige" },
{ quote: "Never offend people with style when you can offend them with substance.", author: "Sam Brown" },
{ quote: "Create your own visual style; let it be unique for yourself and yet identifiable for others.", author: "Orson Welles" },
{ quote: "If it sounds good, you'll hear it. If it looks good, you'll see it. If it's marketed right, you'll buy it. But if it's real, you'll feel it.", author: "Kid Rock" },
{ quote: "Not everyone notices the flowers you plant, but everyone will notice the fire you start.", author: "Gareth Straker Field" },
{ quote: "A great logo isn't going to make a shitty product any less shitty, a hard worker isn't going to make a bad boss a good leader.", author: "Christopher Simmons" },
{ quote: "Information is cheap, meaning is expensive. Don't you forget it.", author: "George Dyson" },
{ quote: "If you aren’t aligned with a human need, you’re just going to build a very powerful system to address a very small problem.", author: "Josh Lovejoy" },
{ quote: "Don't make me think. I'm really not in the mood for it.", author: "Steve Krug" },
{ quote: "Creativity isn't worth a thing if it isn't served with an equal amount of reliability. ", author: "Anton Peck" },
{ quote: "Minimalism is not a lack of something. It’s simply the perfect amount of something.", author: "Nicholas Burroughs" },
{ quote: "Don’t explain why it works; explain how you use it.", author: "Steven Brust" },
{ quote: "You can't just turn on creativity like a faucet. You have to be in the right mood.", author: "Calvin Hobbes" },
{ quote: "To make pearls, you've got to eat dirt. Life's just funny that way.", author: "Frank Chimero" },
{ quote: "I really like looking at design and thinking: that attention to detail must have taken absolutely ages.", author: "Si Scott" }];


class DisplayBox extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "onClick",








    () => {
      let index = Math.floor(Math.random() * (boxQuotes.length - 1) + 1);

      this.setState({
        quote: boxQuotes[index]["quote"] });


      this.setState({
        author: boxQuotes[index]["author"] });


    });_defineProperty(this, "onTweet",

    () => {
    });this.state = { quote: boxQuotes[0]["quote"], // initial quote
      author: boxQuotes[0]["author"] // initial author
    };this.onClick = this.onClick.bind(this);this.onTweet = this.onTweet.bind(this);}render() {
    //tweet button
    let tweetURL = 'https://twitter.com/intent/tweet?' +
    'hashtags=quotes&related=freecodecamp&text=' +
    encodeURIComponent('"' + this.state.quote + '" -' + this.state.author);

    return (
      React.createElement("div", null,
      React.createElement("div", { id: "quote-box" },
      React.createElement("div", { class: "container container-table" },
      React.createElement("div", { class: "row" }),
      React.createElement("div", { class: "row vertical-center-row align-middle" },
      React.createElement("div", { class: "text-center col-xs-4 col-xs-offset-4" },

      React.createElement("p", { id: "text" }, this.state.quote),

      React.createElement("p", { id: "author" }, this.state.author),

      React.createElement("button", { type: "button", class: "btn btn-outline-secondary btn-sm", id: "new-quote", onClick: this.onClick }, "New Quote"),


      React.createElement("a", { href: tweetURL, id: "tweet-quote", class: "btn btn-social-icon btn-twitter", title: "Tweet", target: "_blank" }, React.createElement("span", { class: "fa fa-twitter" }))))))));









  }}



ReactDOM.render(
React.createElement(DisplayBox, null),
document.getElementById("body"));