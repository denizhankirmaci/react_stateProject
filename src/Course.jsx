import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
//import Kompleweb_Farkli from "./images/kompleweb.jpg";
//Mevcut css lerin hepsini App.css den almaktadır. O App.jsx de App.css olarak import edilmiştir cünkü
//component bazlı css kullanmak istersek, gidip css dosyası oluşturacağız (adı önemli değil) ve kullanmak istediğimiz sayfada çağıracağız.
import "./Course.css";

// const courseMap = {
//   Angular: Angular,
//   Bootstrap: Bootstrap,
//   Ccsharp: Ccsharp,
//   KompleWeb: Kompleweb,
// };

//Eğer ki gelen değer ile burada tanımlanan değerler aynı ise aşağıdaki gibi tek tanımlanamabilir. Eğer aynı değilse yukarıdaki gibi key value şeklinde tanımlanması gereklidir.
//KompleWeb : Kompleweb_Farkli şekli.
const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} />
    </div>
  );
}

export default Course;
