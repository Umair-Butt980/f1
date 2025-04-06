
console.log("🏁 Live Timing Service is running...");

class Driver {
    private laps: number = 0;
  
    constructor(public name: string, public team: string) {}
  
    completeLap(): void {
      this.laps++;
      console.log(`${this.name} completed lap ${this.laps}`);
    }
  
    getLapCount(): number {
      return this.laps;
    }

  }


  