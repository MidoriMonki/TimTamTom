
var whoTurn = "red";
var colour;
var finish = false;
var mode = "3D"
var vs = "easy"
var check;
var win;


document.getElementById("normal").style.display = "none";
document.getElementById("restart").style.display = "none";
  
  
function add(square) {
  if (mode == "purple")
  {
  if (finish == false && block[square] != "purple" && block[square] != whoTurn) {
    if (block[square] != "red" && block[square] != "blue") {
      colour = whoTurn;
    } 
    else{
      colour = "purple";
    }
    document.getElementById(square).style.background = colour;
    block[square] = colour;
    for (let i = 0; i < allCombos.length; i++) {
      const [a, b, c] = allCombos[i];
      if (
        block[[a]] != null &&
        block[[a]] === block[[b]] &&
        block[[a]] == block[[c]]
      ) {
        finish = true;
      }
    }
    if (finish) {
      document.getElementById("poo").innerHTML = whoTurn + " wins!";
      document.getElementById("restart").style.display = "block";
    } else {
      if (whoTurn == "red") {
        whoTurn = "blue";
      } else {
        whoTurn = "red";
      }
      document.getElementById("poo").innerHTML = whoTurn + "'s turn!";
    }
  }
  }
  
  
  
  
  
  
  
  
  
  if (mode == "3player")
  {
        colour = whoTurn;
 win = false;
    check = 0;
    if (block[square] != colour)
      {
  if (finish == false) {
    document.getElementById(square).style.color = colour;
    if (colour == "red")
      {
         document.getElementById(square).innerHTML = "X";
      }
    else if (colour == "blue")
      {
         document.getElementById(square).innerHTML = "O";
      }
    else
      {
         document.getElementById(square).innerHTML = "Z";
      }
    block[square] = colour;
    for (let i = 0; i < allCombos.length; i++) {
      const [a, b, c] = allCombos[i];
      if (
        block[[a]] != null &&
        block[[a]] === block[[b]] &&
        block[[a]] == block[[c]]
      ) {
        win = true;
        finish = true;
      }
    }
    for (let i = 1; i < 10; i++)
    {
      if (block[i] == null)
        {
          check += 1;
        }
    }
    if (check == 0)
      {
        finish = true;
        if (win == false)
          {
             whoTurn = "no one";
          }
      }
    if (finish) {
      document.getElementById("poo").innerHTML = whoTurn + " wins!";
      document.getElementById("restart").style.display = "block";
    } else {
      if (whoTurn == "red") {
        whoTurn = "blue";
      } else if (whoTurn == "blue") {
        whoTurn = "purple";
      } else
        {
          whoTurn = "red";
        }
      document.getElementById("poo").innerHTML = whoTurn + "'s turn!";
    }
  }
  }
  }
  
  
  
  
  
  if (mode == "Classic")
  {
    win = false;
    check = 0;
    if (block[square] == null)
      {
  if (finish == false) {
    colour = whoTurn;
    document.getElementById(square).style.color = colour;
    if (colour == "red")
      {
         document.getElementById(square).innerHTML = "X";
      }
    else
      {
         document.getElementById(square).innerHTML = "O";
      }
    block[square] = colour;
    for (let i = 0; i < allCombos.length; i++) {
      const [a, b, c] = allCombos[i];
      if (
        block[[a]] != null &&
        block[[a]] === block[[b]] &&
        block[[a]] == block[[c]]
      ) {
        win = true;
        finish = true;
      }
    }
    for (let i = 1; i < 10; i++)
    {
      if (block[i] == null)
        {
          check += 1;
        }
    }
    if (check == 0)
      {
        finish = true;
        if (win == false)
          {
             whoTurn = "no one";
          }
      }
    if (finish) {
      document.getElementById("poo").innerHTML = whoTurn + " wins!";
      document.getElementById("restart").style.display = "block";
    } else {
      if (whoTurn == "red") {
        whoTurn = "blue";
      } else {
        whoTurn = "red";
      }
      document.getElementById("poo").innerHTML = whoTurn + "'s turn!";
    }
  }
  }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (mode == "3D")
  {
    win = false;
    check = 0;
    if (block[square] == null)
      {
  if (finish == false) {
    colour = whoTurn;
    document.getElementById(square + "d").style.color = colour;
    if (colour == "red")
      {
         document.getElementById(square + "d").innerHTML = "X";
      }
    else
      {
         document.getElementById(square + "d").innerHTML = "O";
      }
    block[square] = colour;
    for (let i = 0; i < allCombos3D.length; i++) {
      const [a, b, c] = allCombos3D[i];
      if (
        block[[a]] != null &&
        block[[a]] === block[[b]] &&
        block[[a]] == block[[c]]
      ) {
        win = true;
        finish = true;
      }
    }
    for (let i = 1; i < 10; i++)
    {
      if (block[i] == null)
        {
          check += 1;
        }
    }
    if (check == 0)
      {
        finish = true;
        if (win == false)
          {
             whoTurn = "no one";
          }
      }
    if (finish) {
      document.getElementById("poo").innerHTML = whoTurn + " wins!";
      document.getElementById("restart").style.display = "block";
    } else {
      if (whoTurn == "red") {
        whoTurn = "blue";
      } else {
        whoTurn = "red";
      }
      document.getElementById("poo").innerHTML = whoTurn + "'s turn!";
    }
  }
  }
  }
  
  
  
  
  
  
  
 if (mode == "Memory")
  {
    win = false;
    check = 0;
    if (block[square] == null)
      {
  if (finish == false) {
    colour = whoTurn;
    document.getElementById(square).style.color = "grey";
    document.getElementById(square).innerHTML = "?";
    block[square] = colour;
    for (let i = 0; i < allCombos.length; i++) {
      const [a, b, c] = allCombos[i];
      if (
        block[[a]] != null &&
        block[[a]] === block[[b]] &&
        block[[a]] == block[[c]]
      ) {
        win = true;
        finish = true;
      }
    }
    for (let i = 1; i < 10; i++)
    {
      if (block[i] == null)
        {
          check += 1;
        }
    }
    if (check == 0)
      {
        finish = true;
        if (win == false)
          {
             whoTurn = "no one";
          }
      }
    if (finish) {
      for (let i = 1; i < 10; i++)
    {
      document.getElementById(i).style.color = block[i];
    }
      document.getElementById("poo").innerHTML = whoTurn + " wins!";
      document.getElementById("restart").style.display = "block";
    } else {
      if (whoTurn == "red") {
        whoTurn = "blue";
      } else {
        whoTurn = "red";
      }
      document.getElementById("poo").innerHTML = whoTurn + "'s turn!";
    }
  }
  }
  }
}


function Restart(){
  
  mode = document.getElementById("gameMode").value;
  whoTurn = "red";
  document.getElementById("restart").style.display = "none";
  finish = false;
    if (mode == "3D")
    {
      for (let i = 1; i < 28; i++)
      {
      block[i] = null;
      //document.getElementById(i + "d").style.background = "white";
      document.getElementById(i + "d").innerHTML = "";
      }
    }else{
      for (let i = 1; i < 10; i++)
      {
      block[i] = null;
      document.getElementById(i).style.background = "white";
      document.getElementById(i).innerHTML = "";
      }
      }
  document.getElementById("poo").innerHTML = whoTurn + "'s turn!";
  if (mode == "3D")
    {
      document.getElementById("3D").style.display = "block";
      document.getElementById("normal").style.display = "none";
    }
  else
    {
      document.getElementById("3D").style.display = "none";
      document.getElementById("normal").style.display = "block";
    }
}

var allCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

var block = [
  "dont touch",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
];

var allCombos3D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], 
  [1, 5, 9],
  [3, 5, 7],
  
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
  [10, 13, 16],
  [11, 14, 17],
  [12, 15, 18], 
  [10, 14, 18],
  [12, 14, 16],
  
  [19, 20, 21],
  [22, 23, 24],
  [25, 26, 27],
  [19, 22, 25],
  [20, 23, 26],
  [21, 24, 27], 
  [19, 23, 27],
  [21, 23, 25],
  
  [1, 10, 19],
  [2, 11, 20],
  [3, 12, 21],
  [4, 13, 22],
  [5, 14, 23],
  [6, 15, 24],
  [7, 16, 25],
  [8, 17, 26],
  [9, 18, 27],
  
  [1, 14, 27],
  [3, 14, 25],
  [9, 14, 19],
  [7, 14, 21],
  
  [2, 14, 26],
  [4, 14, 24],
  [6, 14, 22],
  [8, 14, 20],
  
  [3, 11, 19],
  [6, 14, 22],
  [9, 17, 25],
  
  [1, 11, 21],
  [4, 14, 24],
  [7, 17, 27],
  
  [1, 13, 25],
  [3, 15, 27],
  [7, 13, 19],
  [9, 15, 21]

];


