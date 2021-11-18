let note = prompt("Entrez une note")

if (note >= 0 && note <= 3)  {
    alert("Nul")
} 
else if (note >= 4 && note <= 6)  {
    alert("Moyen")
}
else if (note > 6 && note < 8)  {
    alert("Assez Bien")
}
else if (note >= 8 && note <= 9)  {
    alert("Bien")
}
else if (note == 10)  {
    alert("Excellent")
}
else alert("Veuillez saisir une note entre 0 et 10.")
