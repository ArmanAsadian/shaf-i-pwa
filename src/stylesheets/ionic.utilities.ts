import {css} from 'lit';

const ionicUtilitiesStyleSheets = css`
  .ion-no-padding {
    --padding-start: 0;
    --padding-end: 0;
    --padding-top: 0;
    --padding-bottom: 0;
    padding: 0;
  }

  .ion-padding {
    --padding-start: var(--ion-padding, 16px);
    --padding-end: var(--ion-padding, 16px);
    --padding-top: var(--ion-padding, 16px);
    --padding-bottom: var(--ion-padding, 16px);
    padding-left: var(--ion-padding, 16px);
    padding-right: var(--ion-padding, 16px);
    padding-top: var(--ion-padding, 16px);
    padding-bottom: var(--ion-padding, 16px);
  }

  @supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {
    .ion-padding {
      padding-left: unset;
      padding-right: unset;
      -webkit-padding-start: var(--ion-padding, 16px);
      padding-inline-start: var(--ion-padding, 16px);
      -webkit-padding-end: var(--ion-padding, 16px);
      padding-inline-end: var(--ion-padding, 16px);
    }
  }

  .ion-padding-top {
    --padding-top: var(--ion-padding, 16px);
    padding-top: var(--ion-padding, 16px);
  }

  .ion-padding-start {
    --padding-start: var(--ion-padding, 16px);
    padding-left: var(--ion-padding, 16px);
  }

  .ion-padding-end {
    --padding-end: var(--ion-padding, 16px);
    padding-right: var(--ion-padding, 16px);
  }

  @supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {
    .ion-padding-start {
      padding-left: unset;
      -webkit-padding-start: var(--ion-padding, 16px);
      padding-inline-start: var(--ion-padding, 16px);
    }

    .ion-padding-end {
      padding-right: unset;
      -webkit-padding-end: var(--ion-padding, 16px);
      padding-inline-end: var(--ion-padding, 16px);
    }
  }

  .ion-padding-bottom {
    --padding-bottom: var(--ion-padding, 16px);
    padding-bottom: var(--ion-padding, 16px);
  }

  .ion-padding-vertical {
    --padding-top: var(--ion-padding, 16px);
    --padding-bottom: var(--ion-padding, 16px);
    padding-top: var(--ion-padding, 16px);
    padding-bottom: var(--ion-padding, 16px);
  }

  .ion-padding-horizontal {
    --padding-start: var(--ion-padding, 16px);
    --padding-end: var(--ion-padding, 16px);
    padding-left: var(--ion-padding, 16px);
    padding-right: var(--ion-padding, 16px);
  }

  .ion-no-margin {
    --margin-start: 0;
    --margin-end: 0;
    --margin-top: 0;
    --margin-bottom: 0;
    margin: 0;
  }

  .ion-margin {
    --margin-start: var(--ion-margin, 16px);
    --margin-end: var(--ion-margin, 16px);
    --margin-top: var(--ion-margin, 16px);
    --margin-bottom: var(--ion-margin, 16px);
    margin-left: var(--ion-margin, 16px);
    margin-right: var(--ion-margin, 16px);
    margin-top: var(--ion-margin, 16px);
    margin-bottom: var(--ion-margin, 16px);
  }

  @supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {
    .ion-padding-horizontal {
      padding-left: unset;
      padding-right: unset;
      -webkit-padding-start: var(--ion-padding, 16px);
      padding-inline-start: var(--ion-padding, 16px);
      -webkit-padding-end: var(--ion-padding, 16px);
      padding-inline-end: var(--ion-padding, 16px);
    }

    .ion-margin {
      margin-left: unset;
      margin-right: unset;
      -webkit-margin-start: var(--ion-margin, 16px);
      margin-inline-start: var(--ion-margin, 16px);
      -webkit-margin-end: var(--ion-margin, 16px);
      margin-inline-end: var(--ion-margin, 16px);
    }
  }

  .ion-margin-top {
    --margin-top: var(--ion-margin, 16px);
    margin-top: var(--ion-margin, 16px);
  }

  .ion-margin-start {
    --margin-start: var(--ion-margin, 16px);
    margin-left: var(--ion-margin, 16px);
  }

  .ion-margin-end {
    --margin-end: var(--ion-margin, 16px);
    margin-right: var(--ion-margin, 16px);
  }

  @supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {
    .ion-margin-start {
      margin-left: unset;
      -webkit-margin-start: var(--ion-margin, 16px);
      margin-inline-start: var(--ion-margin, 16px);
    }

    .ion-margin-end {
      margin-right: unset;
      -webkit-margin-end: var(--ion-margin, 16px);
      margin-inline-end: var(--ion-margin, 16px);
    }
  }

  .ion-margin-bottom {
    --margin-bottom: var(--ion-margin, 16px);
    margin-bottom: var(--ion-margin, 16px);
  }

  .ion-margin-vertical {
    --margin-top: var(--ion-margin, 16px);
    --margin-bottom: var(--ion-margin, 16px);
    margin-top: var(--ion-margin, 16px);
    margin-bottom: var(--ion-margin, 16px);
  }

  .ion-margin-horizontal {
    --margin-start: var(--ion-margin, 16px);
    --margin-end: var(--ion-margin, 16px);
    margin-left: var(--ion-margin, 16px);
    margin-right: var(--ion-margin, 16px);
  }

  @supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {
    .ion-margin-horizontal {
      margin-left: unset;
      margin-right: unset;
      -webkit-margin-start: var(--ion-margin, 16px);
      margin-inline-start: var(--ion-margin, 16px);
      -webkit-margin-end: var(--ion-margin, 16px);
      margin-inline-end: var(--ion-margin, 16px);
    }
  }

  .ion-float-left {
    float: left !important;
  }

  .ion-float-right {
    float: right !important;
  }

  .ion-float-start {
    float: left !important;
  }

  :host-context([dir='rtl']) .ion-float-start,
  [dir='rtl'] .ion-float-start {
    float: right !important;
  }

  .ion-float-end {
    float: right !important;
  }

  :host-context([dir='rtl']) .ion-float-end,
  [dir='rtl'] .ion-float-end {
    float: left !important;
  }

  .ion-text-center {
    text-align: center !important;
  }

  .ion-text-justify {
    text-align: justify !important;
  }

  .ion-text-start {
    text-align: start !important;
  }

  .ion-text-end {
    text-align: end !important;
  }

  .ion-text-left {
    text-align: left !important;
  }

  .ion-text-right {
    text-align: right !important;
  }

  .ion-text-nowrap {
    white-space: nowrap !important;
  }

  .ion-text-wrap {
    white-space: normal !important;
  }

  .ion-text-uppercase {
    text-transform: uppercase !important;
  }

  .ion-text-lowercase {
    text-transform: lowercase !important;
  }

  .ion-text-capitalize {
    text-transform: capitalize !important;
  }

  .ion-align-self-start {
    align-self: flex-start !important;
  }

  .ion-align-self-end {
    align-self: flex-end !important;
  }

  .ion-align-self-center {
    align-self: center !important;
  }

  .ion-align-self-stretch {
    align-self: stretch !important;
  }

  .ion-align-self-baseline {
    align-self: baseline !important;
  }

  .ion-align-self-auto {
    align-self: auto !important;
  }

  .ion-wrap {
    flex-wrap: wrap !important;
  }

  .ion-nowrap {
    flex-wrap: nowrap !important;
  }

  .ion-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .ion-justify-content-start {
    justify-content: flex-start !important;
  }

  .ion-justify-content-center {
    justify-content: center !important;
  }

  .ion-justify-content-end {
    justify-content: flex-end !important;
  }

  .ion-justify-content-around {
    justify-content: space-around !important;
  }

  .ion-justify-content-between {
    justify-content: space-between !important;
  }

  .ion-justify-content-evenly {
    justify-content: space-evenly !important;
  }

  .ion-align-items-start {
    align-items: flex-start !important;
  }

  .ion-align-items-center {
    align-items: center !important;
  }

  .ion-align-items-end {
    align-items: flex-end !important;
  }

  .ion-align-items-stretch {
    align-items: stretch !important;
  }

  .ion-align-items-baseline {
    align-items: baseline !important;
  }

  .ion-hide,
  .ion-hide-down,
  .ion-hide-up {
    display: none !important;
  }

  @media (min-width: 576px) {
    .ion-float-sm-left {
      float: left !important;
    }

    .ion-float-sm-right {
      float: right !important;
    }

    .ion-float-sm-start {
      float: left !important;
    }

    :host-context([dir='rtl']) .ion-float-sm-start,
    [dir='rtl'] .ion-float-sm-start {
      float: right !important;
    }

    .ion-float-sm-end {
      float: right !important;
    }

    :host-context([dir='rtl']) .ion-float-sm-end,
    [dir='rtl'] .ion-float-sm-end {
      float: left !important;
    }

    .ion-text-sm-center {
      text-align: center !important;
    }

    .ion-text-sm-justify {
      text-align: justify !important;
    }

    .ion-text-sm-start {
      text-align: start !important;
    }

    .ion-text-sm-end {
      text-align: end !important;
    }

    .ion-text-sm-left {
      text-align: left !important;
    }

    .ion-text-sm-right {
      text-align: right !important;
    }

    .ion-text-sm-nowrap {
      white-space: nowrap !important;
    }

    .ion-text-sm-wrap {
      white-space: normal !important;
    }

    .ion-text-sm-uppercase {
      text-transform: uppercase !important;
    }

    .ion-text-sm-lowercase {
      text-transform: lowercase !important;
    }

    .ion-text-sm-capitalize {
      text-transform: capitalize !important;
    }

    .ion-hide-sm-up {
      display: none !important;
    }
  }

  @media (max-width: 575.98px) {
    .ion-hide-sm-down {
      display: none !important;
    }
  }

  @media (min-width: 768px) {
    .ion-float-md-left {
      float: left !important;
    }

    .ion-float-md-right {
      float: right !important;
    }

    .ion-float-md-start {
      float: left !important;
    }

    :host-context([dir='rtl']) .ion-float-md-start,
    [dir='rtl'] .ion-float-md-start {
      float: right !important;
    }

    .ion-float-md-end {
      float: right !important;
    }

    :host-context([dir='rtl']) .ion-float-md-end,
    [dir='rtl'] .ion-float-md-end {
      float: left !important;
    }

    .ion-text-md-center {
      text-align: center !important;
    }

    .ion-text-md-justify {
      text-align: justify !important;
    }

    .ion-text-md-start {
      text-align: start !important;
    }

    .ion-text-md-end {
      text-align: end !important;
    }

    .ion-text-md-left {
      text-align: left !important;
    }

    .ion-text-md-right {
      text-align: right !important;
    }

    .ion-text-md-nowrap {
      white-space: nowrap !important;
    }

    .ion-text-md-wrap {
      white-space: normal !important;
    }

    .ion-text-md-uppercase {
      text-transform: uppercase !important;
    }

    .ion-text-md-lowercase {
      text-transform: lowercase !important;
    }

    .ion-text-md-capitalize {
      text-transform: capitalize !important;
    }

    .ion-hide-md-up {
      display: none !important;
    }
  }

  @media (max-width: 767.98px) {
    .ion-hide-md-down {
      display: none !important;
    }
  }

  @media (min-width: 992px) {
    .ion-float-lg-left {
      float: left !important;
    }

    .ion-float-lg-right {
      float: right !important;
    }

    .ion-float-lg-start {
      float: left !important;
    }

    :host-context([dir='rtl']) .ion-float-lg-start,
    [dir='rtl'] .ion-float-lg-start {
      float: right !important;
    }

    .ion-float-lg-end {
      float: right !important;
    }

    :host-context([dir='rtl']) .ion-float-lg-end,
    [dir='rtl'] .ion-float-lg-end {
      float: left !important;
    }

    .ion-text-lg-center {
      text-align: center !important;
    }

    .ion-text-lg-justify {
      text-align: justify !important;
    }

    .ion-text-lg-start {
      text-align: start !important;
    }

    .ion-text-lg-end {
      text-align: end !important;
    }

    .ion-text-lg-left {
      text-align: left !important;
    }

    .ion-text-lg-right {
      text-align: right !important;
    }

    .ion-text-lg-nowrap {
      white-space: nowrap !important;
    }

    .ion-text-lg-wrap {
      white-space: normal !important;
    }

    .ion-text-lg-uppercase {
      text-transform: uppercase !important;
    }

    .ion-text-lg-lowercase {
      text-transform: lowercase !important;
    }

    .ion-text-lg-capitalize {
      text-transform: capitalize !important;
    }

    .ion-hide-lg-up {
      display: none !important;
    }
  }

  @media (max-width: 991.98px) {
    .ion-hide-lg-down {
      display: none !important;
    }
  }

  @media (min-width: 1200px) {
    .ion-float-xl-left {
      float: left !important;
    }

    .ion-float-xl-right {
      float: right !important;
    }

    .ion-float-xl-start {
      float: left !important;
    }

    :host-context([dir='rtl']) .ion-float-xl-start,
    [dir='rtl'] .ion-float-xl-start {
      float: right !important;
    }

    .ion-float-xl-end {
      float: right !important;
    }

    :host-context([dir='rtl']) .ion-float-xl-end,
    [dir='rtl'] .ion-float-xl-end {
      float: left !important;
    }

    .ion-text-xl-center {
      text-align: center !important;
    }

    .ion-text-xl-justify {
      text-align: justify !important;
    }

    .ion-text-xl-start {
      text-align: start !important;
    }

    .ion-text-xl-end {
      text-align: end !important;
    }

    .ion-text-xl-left {
      text-align: left !important;
    }

    .ion-text-xl-right {
      text-align: right !important;
    }

    .ion-text-xl-nowrap {
      white-space: nowrap !important;
    }

    .ion-text-xl-wrap {
      white-space: normal !important;
    }

    .ion-text-xl-uppercase {
      text-transform: uppercase !important;
    }

    .ion-text-xl-lowercase {
      text-transform: lowercase !important;
    }

    .ion-text-xl-capitalize {
      text-transform: capitalize !important;
    }

    .ion-hide-xl-up {
      display: none !important;
    }
  }

  @media (max-width: 1199.98px) {
    .ion-hide-xl-down {
      display: none !important;
    }
  }
`;

export default ionicUtilitiesStyleSheets;
