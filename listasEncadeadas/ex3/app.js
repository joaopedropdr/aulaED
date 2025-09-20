import {Linkedlist3} from "./Linkedlist3.js";

const poderes = new Linkedlist3();

poderes.append("Raio Congelante");
poderes.toString();
poderes.append("Bola de fogo");
poderes.toString();
poderes.preprend("Escudo de fogo");
poderes.toString();
poderes.removeByValue("Raio Congelante");
poderes.toString();
console.log(poderes.find("Escudo de fogo"));

