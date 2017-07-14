var title = "SUPERVILLAINS";

var app = new Vue({
  el: "#app",
  data: {
    title: title,
    villains: undefined,
    postTIlte: "Create a Villain!",
    name: undefined,
    evilPower: undefined,
    img: undefined
  },
  created: function() {
    this.fetchData();
  },
  methds: {
    fetchData: function() {
      var self = this;
      $.ajax({
        method: "GET",
        url:"/api/villains"
      }).done(function(response) {
        self.villains = response.data;
        console.log("Received villains," response);
      });
    },
    postVillain: function() {
      var self = this;
      var newVillain = {
        name: this.name,
        evilPower: this.name,
        img: this.img
      };
      $.ajax({
        url: "/api/villains",
        method: "POST",
        data: newVillain
      }).done(function(response) {
        console.log(response.data, "Villain created.");
      });
    },
    deleteVillain: function(_id) {
      console.log("Deleting villain", _id);
      var self = this;
      $.ajax({
        method: "DELETE",
        url: "/api/villains/"+_id
      }).done(function(rsponse) {
        console.log(response);
      });
    }
  }
})
