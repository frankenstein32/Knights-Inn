# Knights-Inn <a href="https://5f66405b5cb7be0008f68568--knights-inn.netlify.app/">[Link]</a>
| *May all who entered as guests, leave as friends* |
- This is a React Application which is deployed on <a href="https://www.netlify.com/">netlify</a> and the data is drawn from the API created on <a href="https://www.contentful.com/">contentful</a>.

### Introduction
- This webApp is all about Knights-Inn(A beach side Resort) for the guests who wants to spend a beautifull time and wants to collect a lot of memory with us.
- Everything about our hotel is hosted on this website to ease our guests in order to book a room along with its price, quality and Area which will help guests to choose the best among the bests (Pun Intended).

### Data Format (API)

- There are 14 Rooms available on the website and corresponding data is stored on contentful.
- Name in the first column corresponds to the type of rooms available on the website.
- Below given JSON object is an example of the data fetched from the API.


```
name: "single basic",
      slug: "single-basic",
      type: "single",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
```

- Below attached photo corresponds to how the data is stored at Contentful(In case someone wants to clone the project)

![image](https://user-images.githubusercontent.com/34310411/93689651-26e62980-faee-11ea-9530-8966d5c92525.png)

### Instructions
In order to run the following code you can follow the steps below.
- Clone the project
- Open terminal in the same directory as of the Project and following commands
    - `npm install` To install all of the dependencies 
    - `npm start` To start the server and the application will be started at localhost: 3000


### View

__1. Home Page__
The home-page is consisting of three components welcome Component, services Component and featured Component.

- __Welcome Component__


![image](https://user-images.githubusercontent.com/34310411/93689777-64978200-faef-11ea-9bb5-e2c1a46d2d5d.png)


- __Services Component__


![image](https://user-images.githubusercontent.com/34310411/93689804-afb19500-faef-11ea-8c4c-bbe513e13ccf.png)


- __Featured Component__


![image](https://user-images.githubusercontent.com/34310411/93689806-bf30de00-faef-11ea-9679-1a31c584f269.png)


__2. Rooms Page__
This page also consists of three components which are welcome Component, Filter Component and RoomList Component.

- __Welcome Component__


![image](https://user-images.githubusercontent.com/34310411/93689842-1a62d080-faf0-11ea-9490-586ef8c83642.png)


- __Filter Component__


![image](https://user-images.githubusercontent.com/34310411/93689853-336b8180-faf0-11ea-8fa5-96dff4ed4796.png)

- __RoomList Component__


![image](https://user-images.githubusercontent.com/34310411/93689864-4d0cc900-faf0-11ea-993f-7a8720b38cbe.png)

__3. Single Room Page__
This page contains information about single selected room and hence will cover all important parameters about the room selected.  

This page consists of two Components which are Welcome Component and Info Component.

- __Welcome Component__


![image](https://user-images.githubusercontent.com/34310411/93689930-dcb27780-faf0-11ea-9fad-8f95d2204a49.png)


- __Info Component__


![image](https://user-images.githubusercontent.com/34310411/93689941-f784ec00-faf0-11ea-9dfc-8d70acc7a4e2.png)


__4. Error Page__
In case anyone directs to a wrong route while searching for room.


![image](https://user-images.githubusercontent.com/34310411/93689964-29964e00-faf1-11ea-8e4a-0e9abe5641f3.png)


__5. Invalid Room__
In case anyone try to fetch data of room with invalid name.


![image](https://user-images.githubusercontent.com/34310411/93689988-5b0f1980-faf1-11ea-8282-78ebb13587da.png)

__6. Loader__

![gif](https://media.giphy.com/media/lyTUnliWUrDYsT71et/giphy.gif)



__WebApp url__: <a href="https://5f66405b5cb7be0008f68568--knights-inn.netlify.app/">Knights-Inn [ *May all who entered as guests, leave as friends* ]</a>
