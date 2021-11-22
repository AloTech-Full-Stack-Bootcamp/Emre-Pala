import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    if (serie.isWatched) {
      //increase the number of watched series
      this.numberOfWatched += 1;

      // Check the lastSerie, if it's empty set the parametre serie to lastSerie
      if (this.lastSerie === undefined) {
        this.lastSerie = serie;
      }
      //If the lastSerie exists, compare parametre serie and the existing lastSerie with their dates
      else {
        if (
          new Date(this.lastSerie.finishedDate) < new Date(serie.finishedDate)
        ) {
          this.lastSerie = serie;
        }
      }
    } else {
      // If a serie hasn't been watched:
      if (serie.isCurrent) {
        // Define Current Serie
        if (!this.currentSerie) {
          this.currentSerie = serie;
        }
      } else if (!this.nextSerie) {
        // Set next Serie prop
        this.nextSerie = serie;
      }
    }
    //it should also update the number of series marked as watched / unwatched:
    this.numberOfUnWatched = this.series.length - this.numberOfWatched;
  };
  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    series.map((item) => {
      this.add(item);
    });
  }

  this.finishSerie = function () {
    // Loop all teh series
    this.series.forEach((serie) => {
      // update lastSerie
      if (serie === this.currentSerie) {
        serie.isWatched = true;
        serie.isCurrent = false;
        serie.finishedDate = new Date();
        this.lastSerie = serie;
      }
      if (serie === this.nextSerie) {
        this.currentSerie = serie;
        serie.isCurrent = true;
      }
      if (this.nextSerie === this.currentSerie) {
        if (!serie.isWatched && !serie.isCurrent) {
          this.nextSerie = serie;
        }
      }
      // update numberOfWatched and numberOfUnWatched
      this.numberOfWatched += 1;
      this.numberOfUnWatched = this.series.length - this.numberOfWatched;
    });
  };

  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
