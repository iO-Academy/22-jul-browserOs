const gifArray = [
    "https://media.giphy.com/media/45GedASYX0h0c/giphy.gif", 
    "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif", 
    "https://media.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif",
    "https://media.giphy.com/media/uM0QzrHWSDr4KwbC3v/giphy.gif",
    "https://media.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif",
    "https://media.giphy.com/media/k0GYETfMTQ7H1nP3ZE/giphy.gif",
    "https://media.giphy.com/media/DlGaTfcMeDmz6/giphy.gif",
    "https://media.giphy.com/media/l41Yh18f5TbiWHE0o/giphy.gif",
    "https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif",
    "https://media.giphy.com/media/gcXcSRYZ9cGWY/giphy.gif",
    "https://media.giphy.com/media/jUDvU0mBA9trNjOV3e/giphy.gif",
    "https://media.giphy.com/media/ljaDzjv8cpIpa/giphy.gif",
    "https://media.giphy.com/media/XKL1MHvk47OXC/giphy.gif",
    "https://media.giphy.com/media/QkU11CCiyBGWk/giphy.gif",
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    "https://media.giphy.com/media/26ufq9mryvc5HI27m/giphy.gif",
    "https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif",
    "https://media.giphy.com/media/wrzf9P70YWLJK/giphy.gif",
    "https://media.giphy.com/media/3oEjHLzm4BCF8zfPy0/giphy.gif",
    "https://media.giphy.com/media/TcdpZwYDPlWXC/giphy.gif"
]

function shuffleArrayGetOne(){
 shuffled = gifArray.shuffle
 singleGifArray = shuflled.slice(1,1)
 return singleGifArray.toString()
}