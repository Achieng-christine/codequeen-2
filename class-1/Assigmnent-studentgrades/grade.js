//  Grade A - 80+
//  Grade B - 79-70
//  Grade C - 69-60
//  Grade D - 59-50
//  Grade F - 49 and below


let result = [80];
let grade;
if (result >=80 && result <=100){
    grade = "A"
}else if (result >=70 && result <=79){
    grade = "B"
}else if (result >=60 && result <=69){
    grade = "C"
}else if (result >=50 && result <=59){
    grade = "D"
}else if (result >=49 && result <=0){
    grade = "F"
}else {
    grade = "Invalide results"
}
