This is all about javascript basic to advance.

# Project 1 :: Dynamic Data

```javascript

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #heading {
        font-family: sans-serif;
        font-size: 24px;
        text-align: center;
        margin-bottom: 20px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 7px;
        border-radius: 10px;
        background-color: #ffffff94;
        z-index: 1000;
        margin-top: 10px;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-top: 60px;
      }

      .parent {
        width: 300px;
        padding: 10px;
        background-color: purple;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .frame {
        width: 100%;
        height: 200px;
        background-color: rgb(146, 90, 198);
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 10px;
        overflow: hidden;
      }

      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .followers,
      .name,
      .bio {
        padding: 5px;
        margin: 5px 0;
        border-radius: 2px;
        background-color: rgb(124, 36, 121);
        /* text-align: center; */
        color: white;
      }

      h3,p {
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        /* text-align: center; */
      }
    </style>
  </head>
  <body style="background-color: rgb(51, 49, 49); color: white">
    <div id="heading">Handling Dynamic Data, XML Request</div>
    <div class="container"></div>
    <script>
      const container = document.querySelector(".container");

      function addingMsgImgFollowers(msg, url, followers, name) {
        const pDiv = document.createElement("div");
        pDiv.className = "parent";

        const divFrame = document.createElement("div");
        divFrame.className = "frame";

        const img = document.createElement("img");
        img.className = "img";
        img.src = url;

        const h3 = document.createElement("h3");
        h3.className = "name";
        h3.textContent = `✅ Name : ${name}`;

        const p = document.createElement("p");
        p.className = "followers";
        p.textContent = `✅ Followers 👉 ${followers}`;

        const p1 = document.createElement("p");
        p1.className = "bio";
        p1.textContent = `🙋‍♀️ Bio : ${msg}`;

        pDiv.appendChild(divFrame);
        divFrame.appendChild(img);
        pDiv.appendChild(h3);
        pDiv.appendChild(p);
        pDiv.appendChild(p1);

        container.appendChild(pDiv);
      }

      const message = "Ashirbad Girls hostal. fully secured and wonderfull.!";
      const imageUrl =
        "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg";
      const followersCount = 9000;

      addingMsgImgFollowers(message,imageUrl,followersCount,"Ashirbad Girls Hostal")

      // for (let i = 0; i < 16; i++) {
      //   addingMsgImgFollowers(
      //     message,
      //     imageUrl,
      //     followersCount,
      //     `Name ${i + 1}`
      //   );
      // }

      const requestUrl = "https://api.github.com/users/hiteshchoudhary";
      const xhr = new XMLHttpRequest();
      xhr.open("GET", requestUrl);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          const data = JSON.parse(this.responseText);
          addingMsgImgFollowers("Hello", data.avatar_url,data.followers, data.name)
          console.log(data);
          console.log(data.followers);
        }
      };
      xhr.send();
    </script>
  </body>
</html>

<!-- setAttribute is used to override and alreding existing elemt changes by it -->


```


