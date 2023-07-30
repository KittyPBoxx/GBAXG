import {
  LocalizeController
} from "./chunk.BWLRNN6E.js";
import {
  ShoelaceElement,
  e,
  e2
} from "./chunk.7FMMWSAC.js";
import {
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/format-date/format-date.ts
var SlFormatDate = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.date = /* @__PURE__ */ new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return void 0;
    }
    return x`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    })}
      </time>
    `;
  }
};
__decorateClass([
  e2()
], SlFormatDate.prototype, "date", 2);
__decorateClass([
  e2()
], SlFormatDate.prototype, "weekday", 2);
__decorateClass([
  e2()
], SlFormatDate.prototype, "era", 2);
__decorateClass([
  e2()
], SlFormatDate.prototype, "year", 2);
__decorateClass([
  e2()
], SlFormatDate.prototype, "month", 2);
__decorateClass([
  e2()
], SlFormatDate.prototype, "day", 2);
__decorateClass([
  e2()
], SlFormatDate.prototype, "hour", 2);
__decorateClass([
  e2()
], SlFormatDate.prototype, "minute", 2);
__decorateClass([
  e2()
], SlFormatDate.prototype, "second", 2);
__decorateClass([
  e2({ attribute: "time-zone-name" })
], SlFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  e2({ attribute: "time-zone" })
], SlFormatDate.prototype, "timeZone", 2);
__decorateClass([
  e2({ attribute: "hour-format" })
], SlFormatDate.prototype, "hourFormat", 2);
SlFormatDate = __decorateClass([
  e("sl-format-date")
], SlFormatDate);

export {
  SlFormatDate
};
