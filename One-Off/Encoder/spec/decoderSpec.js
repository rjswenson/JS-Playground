describe("Decoder", function() {
  it("decodes an encrypted string from the URL", function() {
    decoder.keyGrabber = function() {
      decoder.encrypted = CryptoJS.AES.encrypt("a test string","password");
    };
    decoder.message = function() {
      decoder.password =  "password";
      decoder.decrypted = CryptoJS.AES.decrypt(this.encrypted, this.password).toString(CryptoJS.enc.Utf8);
    };
    expect(decoder.run()).toEqual("a test string");
  });
});
