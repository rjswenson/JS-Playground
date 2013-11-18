  var decoder = {
    run: function() {
      this.keyGrabber();
      this.message();
      return this.decrypted;
    },
    keyGrabber: function (){
      this.encrypted = document.URL.split("?")[1];
    },
    message: function(){
      this.password = prompt("Enter your Decoder Password: ");
      this.decrypted = CryptoJS.AES.decrypt(this.encrypted, this.password).toString(CryptoJS.enc.Utf8);
      alert(this.decrypted)
      return this.decrypted
    }
  }
  document.getElementById('decrypt').onclick = function() { alert(decoder.run()); };
