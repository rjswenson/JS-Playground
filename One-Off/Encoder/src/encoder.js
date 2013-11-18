var encoder = {
  setMessage: function() {
    this.message = document.getElementById('message').value;
  },
  getPassword: function() {
    this.password = prompt("Enter your Decoder Password: ");
  },
  setUrl: function() {
    totalURL = document.URL + "?" +
            encodeURI(this.encrypt());
  },
  replaceMessageWithUrl: function () {
    replaceURL = totalURL.replace("encode.html", "decode.html");
    document.getElementById('message').value = replaceURL;
  },
  encrypt: function() {
    cypher = CryptoJS.AES.encrypt(this.message, this.password);
    this.verify = CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8);
    return cypher
  },
  protect: function() {
    this.setMessage();
    this.getPassword();
    this.setUrl();
    this.replaceMessageWithUrl();
  }
}
document.getElementById('encrypt').onclick = function() { encoder.protect() }
