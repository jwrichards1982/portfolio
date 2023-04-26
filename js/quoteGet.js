var quotes = [
  "\"A learning experience is one of those things that say, \'You know that thing you just did? Don\'t do that\'.\" --Douglas Adams",
  "\"I may not have gone where I intended to go, but I think I have ended up where I needed to be.\" --Douglas Adams",
  "\"I love deadlines. I love the whooshing noise they make as they go by.\"--Douglas Adams",
  "\"Driving a Porsche in London is like bringing a Ming vase to a football game.\" --Douglas Adams",
  "\"He attacked everything in life with a mix of extraordinary genius and naive incompetence, and it was often difficult to tell which was which.\" --Douglas Adams",
  "\"I do not fear computers. I fear the lack of them.\" --Isaac Asimov",
  "\"Those people who think they know everything are a great annoyance to those of us who do.\" --Isaac Asimov",
  "\"The saddest aspect of life right now is that science fiction gathers knowledge faster than society gathers wisdom.\" --Isaac Asimov",
  "\"Barbara Walters: \"But what would you do if the doctor gave you only six months to live?\"<br>Asimov: \"Type faster.\" --Isaac Asimov",
  "\"Never let your sense of morals prevent you from doing what is right.\" --Isaac Asimov",
  "\"We are an impossibility in an impossible universe.\" --Ray Bradbury",
  "\"Insanity is relative. It depends on who has who locked in what cage.\" --Ray Bradbury",
  "\"You don\'t have to burn books to destroy a culture. Just get people to stop reading.\" --Ray Bradbury",
  "\"So few want to be rebels anymore. And out of those few, most, like myself, scare easily.\" --Ray Bradbury",
  "\"Science is no more than an investigation of a miracle we can never explain, and art is an interpretation of that miracle.\" --Ray Bradbury",
  "\"Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying.\" --Arthur C. Clarke",
  "\"How inappropriate to call this planet \'Earth\', when it is clearly \'Ocean\'.\" --Arthur C. Clarke",
  "\"I don\'t believe in astrology; I\'m a Sagittarius and we\'re skeptical.\" --Arthur C. Clarke",
  "\"...science fiction is something that could happen - but usually you wouldn\'t want it to. Fantasy is something that couldn\'t happen - though often you only wish that it could.\" --Arthur C. Clarke",
  "\"Reading computer manuals without the hardware is as frustrating as reading sex manuals without the software.\" --Arthur C. Clarke",
  "\"If you think this Universe is bad, you should see some of the others.\" --Philip K. Dick",
  "\"It really seems to me that in the midst of great tragedy, there is always the possibility that something terribly funny will happen.\" --Philip K. Dick",
  "\"No single thing abides; and all things are fucked up.\" (The Transmigration of Timothy Archer) --Philip K. Dick",
  "\"It is sometimes an appropriate response to reality to go insane.\" (VALIS) --Philip K. Dick",
  "\"I like her; I could watch her the rest of my life. She has breasts that smile.\" (Do Androids Dream of Electric Sheep?) --Philip K. Dick",
  "\"The \'Net\' is a waste of time, and that\'s exactly what\'s right about it.\" --William Gibson",
  "\"The future is not google-able.\" --William Gibson",
  "\"Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.\" (Dune) --Frank Herbert",
  "\"Absolute power does not corrupt absolutely, absolute power attracts the corruptible.\" --Frank Herbert",
  "\"Show me a completely smooth operation and I\'ll show you someone who\'s covering mistakes. Real boats rock.\" (Chapterhouse: Dune) --Frank Herbert",
  "\"You see, gentlemen, they have something to die for. They\'ve discovered they\'re a people. They\'re awakening.\" (Dune) --Frank Herbert",
  "\"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.\" (Dune) --Frank Herbert",
  "\"The dinosaurs became extinct because they didn\'t have a space program. And if we become extinct because we don\'t have a space program, it\'ll serve us right!\" --Larry Niven",
  "\"Never fire a laser at a mirror.\" --Larry Niven",
  "\"That\'s the thing about people who think they hate computers...What they really hate are lousy programmers.\" --Larry Niven",
  "\"Here\'s a quick rule of thumb: Don\'t annoy science fiction writers. These are people who destroy entire planets before lunch. Think of what they\'ll do to you.\" --John Scalzi",
  "\"I didn\'t mind getting old when I was young. It\'s the being old now that\'s getting to me.\" --John Scalzi",
  "\"I\'m not insane sir. I have a finely calibrated sense of acceptable risk.\" (Old Man\'s War) --John Scalzi",
  "\"If you want me to treat your ideas with more respect, get some better ideas.\" --John Scalzi"
]

function newQuote()
{
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}