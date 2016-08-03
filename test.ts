/// <reference path="./typings/globals/jquery/index.d.ts" />
import * as $ from "jquery";

class HttpCall {

    Get(url) {
        $.ajax({
            url: url,
            method: "GET"
        }).done(function(data) {
            console.log("get users");
        	console.log(JSON.stringify(data));
            alert(JSON.stringify(data));
        }).fail(function(error) {
            alert("error to get all users");
        });
    }

    GetOne(url) {
        $.ajax({
            url: url,
            method: "GET"
        }).done(function(data) {
            console.log("Get User");
        	console.log(JSON.stringify(data));
            alert(JSON.stringify(data));
        }).fail(function(error) {
            alert("error to get one user");
        });
    }

    GetOneAddresses(url) {
       $.ajax({
            url: url,
            method: "GET"
        }).done(function(data) {
            console.log("addresses:");
        	console.log(JSON.stringify(data.addresses));
            alert(JSON.stringify(data.addresses));
        }).fail(function(error) {
            alert("error to get the addresses");
        });
    }

    Create(url, object) {
        $.ajax({
            url: url,
            method: "POST",
            data: object,
            dataType: 'json'
        }).done(function(data) {
            console.log("user created:");
        	console.log(JSON.stringify(data));
            alert(JSON.stringify(data));
        }).fail(function(error) {
            alert("error to create the user");
        });
    }

    Update(url, object) {
        $.ajax({
            url: url,
            method: "PUT",
            data: object,
            dataType: 'json'
        }).done(function(data) {
            console.log("user updated:");
        	console.log(JSON.stringify(data));
            alert(JSON.stringify(data));
        }).fail(function(error) {
            alert("error to update the user");
        });
    }

    Delete(url) {
        $.ajax({
            url: url,
            method: "DELETE"
        }).done(function(data) {
            console.log("delete");
        	console.log(JSON.stringify(data));
            alert(JSON.stringify(data));
        }).fail(function(error) {
            alert("error to delete the user");
        });
    }
}

let test = new HttpCall();
var obj = {
    "name": "Samantha Baer",
    "username": "Samantha",
    "email": "Samantha@yesenia.net",
    "addresses": [
      {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      }
    ],
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
}

var obj1 = {
    "name": "test Baer",
    "username": "testy",
    "email": "Baer@testy.net",
    "phone": "1-463-123-4447",
    "website": "Baer.info",
}

test.Get("http://localhost:3000/users"); //GET

test.GetOne("http://localhost:3000/users/10"); // GET one

test.Delete("http://localhost:3000/users/3");  // DELETE

test.GetOneAddresses("http://localhost:3000/users/10"); // GET adresses

test.Create("http://localhost:3000/users", obj); // POST

test.Update("http://localhost:3000/users/9999", obj1); // PUT

