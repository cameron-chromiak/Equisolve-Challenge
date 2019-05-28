// Cameron Chromiak
//
//  Use this JSON feed to display a list of styled headlines in reverse chronological order.
//  Please provide your code in a JS Fiddle or Web page. We suggest keeping your code private.


// A response from wherever
let res = [
   {
      "published_at":"2018-07-01",
      "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "_kw":[

      ]
   },
   {
      "published_at":"2019-07-02",
      "title":"Vestibulum in arcu neque. Pellentesque feugiat, mauris at congue semper. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2017-07-03",
      "title":"Nulla iaculis, massa sit amet tempor pellentesque, sem ligula euismod metus, eget blandit tortor arcu eu nisl",
      "_kw":[

      ]
   },
   {
      "published_at":"2018-06-01",
      "title":"Pellentesque non feugiat ante. Donec dignissim turpis id orci consectetur. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2014-09-02",
      "title":"Aliquam convallis turpis urna, ut dapibus arcu faucibus interdum",
      "_kw":[

      ]
   },
   {
      "published_at":"2017-12-03",
      "title":"Duis id elit eu metus commodo volutpat at at velit. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2018-01-01",
      "title":"Aliquam tristique dui turpis, nec facilisis tellus eleifend id. Morbi. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2019-05-02",
      "title":"Nam arcu mauris, porttitor ut leo id, luctus malesuada orci. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2017-07-03",
      "title":"Donec ut mi bibendum, pharetra dolor sed, dapibus mauris. In. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2015-01-01",
      "title":"Morbi enim metus, mollis in ultrices molestie, sagittis quis elit. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2017-02-02",
      "title":"Curabitur vestibulum lorem in ex semper iaculis. Mauris vel facilisis. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2015-03-22",
      "title":"Donec interdum nibh blandit bibendum hendrerit. Lorem ipsum dolor sit. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2016-06-19",
      "title":"Etiam ac tellus quis felis cursus vulputate. Maecenas at felis. ",
      "_kw":[

      ]
   },
   {
      "published_at":"2019-04-30",
      "title":"Integer mi sapien, pharetra at nunc vel, tristique sollicitudin augue. ",
      "_kw":[

      ]
   }
]



let container = document.getElementById('container')

//Sort list reverse chronologically
res.sort((a, b) =>{
  return ((a.published_at < b.published_at) ? 1: (b.published_at < a.published_at) ? -1:0)
})


//Display each title on a div, title as h4 and date as h5,
//styled as a card.
res.map(item =>{
  let article = document.createElement('div')
  let title = document.createElement('h4')
  let date = document.createElement('h5')
  article.className = 'article'
  title.innerHTML = `${item.title}`
  date.innerHTML = `${item.published_at}`
  article.appendChild(title)
  article.appendChild(date)

  container.appendChild(article)
})
