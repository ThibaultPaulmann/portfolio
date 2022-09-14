import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="startup"
export default class extends Controller {
  static targets = ["popup"];

  connect() {
    console.log("connected to startup controller");
    this.popupTarget.classList.add("active");
  }

  remove() {
    this.popupTarget.classList.remove("active");
  }
}
