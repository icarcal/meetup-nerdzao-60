!function(){if(!window.location.search.match(/receiver/gi)){var a=io.connect(window.location.origin),o=Math.random().toString().slice(2);console.log("View slide notes at "+window.location.origin+"/notes/"+o),window.open(window.location.origin+"/notes/"+o,"notes-"+o),a.on("new-subscriber",function(e){t()}),a.on("statechanged-speaker",function(e){Reveal.setState(e.state)}),Reveal.addEventListener("slidechanged",t),Reveal.addEventListener("fragmentshown",t),Reveal.addEventListener("fragmenthidden",t),Reveal.addEventListener("overviewhidden",t),Reveal.addEventListener("overviewshown",t),Reveal.addEventListener("paused",t),Reveal.addEventListener("resumed",t),t()}function t(){var e=Reveal.getCurrentSlide(),t=e.querySelector("aside.notes"),n={notes:"",markdown:!1,socketId:o,state:Reveal.getState()};e.hasAttribute("data-notes")&&(n.notes=e.getAttribute("data-notes")),t&&(n.notes=t.innerHTML,n.markdown="string"==typeof t.getAttribute("data-markdown")),a.emit("statechanged",n)}}();