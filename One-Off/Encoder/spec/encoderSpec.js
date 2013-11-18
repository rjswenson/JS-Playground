describe("Encoder", function(){
  it("encodes a string into a link", function(){
    encoder.protect = function(){
      encoder.message = "A secret";
      encoder.password = "password";
      encoder.encrypt();
    };
    encoder.encrypt = function() {
      cypher = CryptoJS.AES.encrypt(this.message, this.password);
      this.verify = CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8);
      return cypher
    };
    encoder.protect();
    expect(encoder.verify).toEqual("A secret");
  });
});
