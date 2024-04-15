import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoreService } from '../../../../services/score-chambre.service';

@Component({
  selector: 'app-chambre-play',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chambre-play.component.html',
  styleUrl: './chambre-play.component.scss'
})

export class ChambrePlayComponent {
  codeInput: string = ''; // Variable pour stocker le code saisi par le joueur
  showClock: boolean = false;
  currentTime: string = '';
  timer: number = 0;
  timerInterval: any;
  codeCorrect: boolean = false;
  score: number = 0;

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.startTimer();
  }

  toggleClock() {
    this.showClock = !this.showClock;
    if (this.showClock) {
      this.currentTime = '2:00'; // Définir l'heure à 2h00
    }
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (!this.codeCorrect) {
        this.timer++;
      }
    }, 1000); // Incrémente le timer toutes les secondes
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval); // Arrête le timer lorsque le composant est détruit
  }

  formatTimer(time: number) {
    let hours: number = Math.floor(time / 3600);
    let minutes: number = Math.floor((time % 3600) / 60);
    let seconds: number = time % 60;
  
    let hoursDisplay = hours < 10 ? '0' + hours : hours;
    let minutesDisplay = minutes < 10 ? '0' + minutes : minutes;
    let secondsDisplay = seconds < 10 ? '0' + seconds : seconds;
  
    return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
  }

  inspecterCouteau() {
    console.log("Vous ramassez le couteau");
  }

  inspectHorloge() {
    console.log("Vous examinez l'horloge...");
    // Ajoutez ici le code pour l'action sur le tableau
  }

  inspecterTele() {
    console.log("Vous allumez la télé ")
  }

  moveSofa() {
    console.log("vous bougez le sofa")
  }

  submitCode() {
    console.log("Code soumis :", this.codeInput);
    // Ajoutez ici le code pour vérifier le code et effectuer une action en conséquence
    // Par exemple, vérifier si le code est correct et afficher un message
    if (this.codeInput === '1234') {
      console.log("Code correct ! Le coffre s'ouvre...");
      this.codeCorrect = true;
      clearInterval(this.timerInterval); // Arrêter le timer

      this.calculateScore();

      alert(`Bravo ! Le code du coffre est bon. Votre score de partie est de ${this.score}`);
      // Ajoutez ici le code pour ouvrir le coffre
    } else {
      console.log("Code incorrect. Rien ne se passe...");
      // Ajoutez ici le code pour indiquer que le code est incorrect
    }
    this.codeInput = '';
    this.codeCorrect = false;
  }

  calculateScore() {
    this.score = this.timer;
  }

  addScoreToDatabase(scoreBTime: number) {
    const levelId = 1;
    const userId = 1; 

    
    this.scoreService.addScore(levelId, userId, scoreBTime).subscribe(
      (response) => {
        console.log('Score ajouté avec succès :', response);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du score :', error);
      }
    );
  }
}



