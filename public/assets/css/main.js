import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "17pt",
        "font": "inherit",
        "verticalAlign": "baseline",
        "lineHeight": 1.65,
        "WebkitTextSizeAdjust": "none",
        "MsOverflowStyle": "scrollbar",
        "backgroundColor": "#935d8c",
        "backgroundImage": "url(\"images/overlay.png\"), linear-gradient(45deg, #e37682 15%, #5f4d93 85%)",
        "color": "rgba(255, 255, 255, 0.65)",
        "fontFamily": "\"Source Sans Pro\", Helvetica, sans-serif",
        "fontWeight": "300"
    },
    "div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "span": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "applet": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "object": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "iframe": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.7,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 2.5,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "300",
        "lineHeight": 1.2,
        "letterSpacing": -0.025,
        "color": "#ffffff"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.7,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 1.5,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "300",
        "lineHeight": 1.5,
        "letterSpacing": -0.025,
        "color": "#ffffff"
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.7,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 1.25,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "300",
        "lineHeight": 1.5,
        "letterSpacing": -0.025,
        "color": "#ffffff"
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.7,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 1.1,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "300",
        "lineHeight": 1.5,
        "letterSpacing": -0.025,
        "color": "#ffffff"
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.7,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "300",
        "lineHeight": 1.5,
        "letterSpacing": -0.025,
        "color": "#ffffff"
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.7,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.7,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "300",
        "lineHeight": 1.5,
        "letterSpacing": -0.025,
        "color": "#ffffff"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 2,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none",
        "borderLeft": "solid 4px",
        "fontStyle": "italic",
        "borderLeftColor": "rgba(255, 255, 255, 0.35)"
    },
    "pre": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "WebkitOverflowScrolling": "touch",
        "fontFamily": "\"Courier New\", monospace"
    },
    "a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "MozTransition": "color 0.2s ease, border-bottom 0.2s ease",
        "WebkitTransition": "color 0.2s ease, border-bottom 0.2s ease",
        "MsTransition": "color 0.2s ease, border-bottom 0.2s ease",
        "transition": "color 0.2s ease, border-bottom 0.2s ease",
        "textDecoration": "none",
        "color": "inherit"
    },
    "abbr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "acronym": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "address": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "big": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "cite": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "code": {
        "marginTop": 0,
        "marginRight": 0.25,
        "marginBottom": 0,
        "marginLeft": 0.25,
        "paddingTop": 0.25,
        "paddingRight": 0.65,
        "paddingBottom": 0.25,
        "paddingLeft": 0.65,
        "border": "solid 1px",
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "borderRadius": 8,
        "fontFamily": "\"Courier New\", monospace",
        "background": "rgba(255, 255, 255, 0.075)",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "del": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dfn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "em": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontStyle": "italic"
    },
    "img": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ins": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "kbd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "q": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none"
    },
    "s": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "samp": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "small": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strike": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strong": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "400",
        "color": "#ffffff"
    },
    "sub": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "position": "relative",
        "top": 0.5
    },
    "sup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "position": "relative",
        "top": -0.5
    },
    "tt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "var": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "b": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "400",
        "color": "#ffffff"
    },
    "u": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "i": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontStyle": "italic"
    },
    "center": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.25,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "decimal"
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "disc"
    },
    "li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "fieldset": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "label": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "fontWeight": "400",
        "color": "#ffffff"
    },
    "legend": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "width": "100%"
    },
    "caption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tbody": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tfoot": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "thead": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "th": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "td": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "article": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "aside": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "canvas": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "details": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "embed": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "figcaption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "minHeight": 90 * vh,
        "backgroundColor": "rgba(0, 0, 0, 0.4)"
    },
    "hgroup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "menu": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "output": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ruby": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "summary": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "time": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "mark": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "audio": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "video": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote:before": {
        "content": "none"
    },
    "blockquote:after": {
        "content": "none"
    },
    "q:before": {
        "content": "none"
    },
    "q:after": {
        "content": "none"
    },
    "*": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:before": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "row": {
        "borderBottom": "solid 1px transparent",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -1.5
    },
    "row > *": {
        "float": "left",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.5
    },
    "row:after": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0
    },
    "row:before": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0
    },
    "rowuniform > * > :first-child": {
        "marginTop": 0
    },
    "rowuniform > * > :last-child": {
        "marginBottom": 0
    },
    "row\\30 \\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "row\\30 \\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": 0
    },
    "rowuniform\\30 \\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "rowuniform\\30 \\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": 0
    },
    "rowuniform > *": {
        "paddingTop": 1.5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.5
    },
    "rowuniform": {
        "marginTop": -1.5,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -1.5
    },
    "row\\32 00\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 3
    },
    "row\\32 00\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -3
    },
    "rowuniform\\32 00\\25 > *": {
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 3
    },
    "rowuniform\\32 00\\25": {
        "marginTop": -3,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -3
    },
    "row\\31 50\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 2.25
    },
    "row\\31 50\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -2.25
    },
    "rowuniform\\31 50\\25 > *": {
        "paddingTop": 2.25,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 2.25
    },
    "rowuniform\\31 50\\25": {
        "marginTop": -2.25,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -2.25
    },
    "row\\35 0\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.75
    },
    "row\\35 0\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.75
    },
    "rowuniform\\35 0\\25 > *": {
        "paddingTop": 0.75,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.75
    },
    "rowuniform\\35 0\\25": {
        "marginTop": -0.75,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.75
    },
    "row\\32 5\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.375
    },
    "row\\32 5\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.375
    },
    "rowuniform\\32 5\\25 > *": {
        "paddingTop": 0.375,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.375
    },
    "rowuniform\\32 5\\25": {
        "marginTop": -0.375,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.375
    },
    "\\31 2u": {
        "width": "100%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 2u\\24": {
        "width": "100%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 1u": {
        "width": "91.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 1u\\24": {
        "width": "91.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 0u": {
        "width": "83.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 0u\\24": {
        "width": "83.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\39 u": {
        "width": "75%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\39 u\\24": {
        "width": "75%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\38 u": {
        "width": "66.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\38 u\\24": {
        "width": "66.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\37 u": {
        "width": "58.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\37 u\\24": {
        "width": "58.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\36 u": {
        "width": "50%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\36 u\\24": {
        "width": "50%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\35 u": {
        "width": "41.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\35 u\\24": {
        "width": "41.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\34 u": {
        "width": "33.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\34 u\\24": {
        "width": "33.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\33 u": {
        "width": "25%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\33 u\\24": {
        "width": "25%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\32 u": {
        "width": "16.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\32 u\\24": {
        "width": "16.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 u": {
        "width": "8.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 u\\24": {
        "width": "8.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 2u\\24 + *": {
        "clear": "left"
    },
    "\\31 1u\\24 + *": {
        "clear": "left"
    },
    "\\31 0u\\24 + *": {
        "clear": "left"
    },
    "\\39 u\\24 + *": {
        "clear": "left"
    },
    "\\38 u\\24 + *": {
        "clear": "left"
    },
    "\\37 u\\24 + *": {
        "clear": "left"
    },
    "\\36 u\\24 + *": {
        "clear": "left"
    },
    "\\35 u\\24 + *": {
        "clear": "left"
    },
    "\\34 u\\24 + *": {
        "clear": "left"
    },
    "\\33 u\\24 + *": {
        "clear": "left"
    },
    "\\32 u\\24 + *": {
        "clear": "left"
    },
    "\\31 u\\24 + *": {
        "clear": "left"
    },
    "\\-11u": {
        "marginLeft": "91.66667%"
    },
    "\\-10u": {
        "marginLeft": "83.33333%"
    },
    "\\-9u": {
        "marginLeft": "75%"
    },
    "\\-8u": {
        "marginLeft": "66.66667%"
    },
    "\\-7u": {
        "marginLeft": "58.33333%"
    },
    "\\-6u": {
        "marginLeft": "50%"
    },
    "\\-5u": {
        "marginLeft": "41.66667%"
    },
    "\\-4u": {
        "marginLeft": "33.33333%"
    },
    "\\-3u": {
        "marginLeft": "25%"
    },
    "\\-2u": {
        "marginLeft": "16.66667%"
    },
    "\\-1u": {
        "marginLeft": "8.33333%"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "bodyis-loading *": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "bodyis-loading *:before": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "bodyis-loading *:after": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "input": {
        "fontFamily": "\"Source Sans Pro\", Helvetica, sans-serif",
        "fontSize": "17pt",
        "fontWeight": "300",
        "lineHeight": 1.65,
        "color": "#ffffff"
    },
    "select": {
        "fontFamily": "\"Source Sans Pro\", Helvetica, sans-serif",
        "fontSize": "17pt",
        "fontWeight": "300",
        "lineHeight": 1.65,
        "color": "inherit",
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "borderRadius": 8,
        "border": "solid 1px",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "height": 2.75,
        "background": "rgba(255, 255, 255, 0.075)",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "textarea": {
        "fontFamily": "\"Source Sans Pro\", Helvetica, sans-serif",
        "fontSize": "17pt",
        "fontWeight": "300",
        "lineHeight": 1.65,
        "color": "inherit",
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "borderRadius": 8,
        "border": "solid 1px",
        "display": "block",
        "outline": 0,
        "paddingTop": 0.75,
        "paddingRight": 1,
        "paddingBottom": 0.75,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "background": "rgba(255, 255, 255, 0.075)",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "a:hover": {
        "borderBottomColor": "transparent",
        "color": "#ffffff"
    },
    "pcontent": {
        "MozColumns": "20em 2",
        "WebkitColumns": "20em 2",
        "MsColumns": "20em 2",
        "columns": "20em 2",
        "MozColumnGap": 2,
        "WebkitColumnGap": 2,
        "MsColumnGap": 2,
        "columnGap": 2,
        "textAlign": "justify"
    },
    "h1 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h2 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h3 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h4 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h5 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h6 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "pre code": {
        "display": "block",
        "lineHeight": 1.75,
        "paddingTop": 1,
        "paddingRight": 1.5,
        "paddingBottom": 1,
        "paddingLeft": 1.5,
        "overflowX": "auto"
    },
    "hr": {
        "border": 0,
        "borderBottom": "solid 1px",
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "borderBottomColor": "rgba(255, 255, 255, 0.35)"
    },
    "hrmajor": {
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "align-left": {
        "textAlign": "left"
    },
    "align-center": {
        "textAlign": "center"
    },
    "align-right": {
        "textAlign": "right"
    },
    "box": {
        "borderRadius": 8,
        "border": "solid",
        "marginBottom": 2,
        "paddingTop": 1.5,
        "paddingRight": 1.5,
        "paddingBottom": 1.5,
        "paddingLeft": 1.5,
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "box > :last-child": {
        "marginBottom": 0
    },
    "box > :last-child > :last-child": {
        "marginBottom": 0
    },
    "box > :last-child > :last-child > :last-child": {
        "marginBottom": 0
    },
    "boxalt": {
        "border": 0,
        "borderRadius": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"submit\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "borderRadius": 8,
        "border": 0,
        "cursor": "pointer",
        "display": "inline-block",
        "fontWeight": "300",
        "height": 2.75,
        "lineHeight": 2.75,
        "minWidth": 9.25,
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 0,
        "paddingLeft": 1.5,
        "textAlign": "center",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "backgroundColor": "transparent",
        "boxShadow": "inset 0 0 0 1px rgba(255, 255, 255, 0.35)",
        "color": "#ffffff !important"
    },
    "input[type=\"reset\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "borderRadius": 8,
        "border": 0,
        "cursor": "pointer",
        "display": "inline-block",
        "fontWeight": "300",
        "height": 2.75,
        "lineHeight": 2.75,
        "minWidth": 9.25,
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 0,
        "paddingLeft": 1.5,
        "textAlign": "center",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "backgroundColor": "transparent",
        "boxShadow": "inset 0 0 0 1px rgba(255, 255, 255, 0.35)",
        "color": "#ffffff !important"
    },
    "input[type=\"button\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "borderRadius": 8,
        "border": 0,
        "cursor": "pointer",
        "display": "inline-block",
        "fontWeight": "300",
        "height": 2.75,
        "lineHeight": 2.75,
        "minWidth": 9.25,
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 0,
        "paddingLeft": 1.5,
        "textAlign": "center",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "backgroundColor": "transparent",
        "boxShadow": "inset 0 0 0 1px rgba(255, 255, 255, 0.35)",
        "color": "#ffffff !important"
    },
    "button": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "borderRadius": 8,
        "border": 0,
        "cursor": "pointer",
        "display": "inline-block",
        "fontWeight": "300",
        "height": 2.75,
        "lineHeight": 2.75,
        "minWidth": 9.25,
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 0,
        "paddingLeft": 1.5,
        "textAlign": "center",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "backgroundColor": "transparent",
        "boxShadow": "inset 0 0 0 1px rgba(255, 255, 255, 0.35)",
        "color": "#ffffff !important"
    },
    "input[type=\"submit\"]icon": {
        "paddingLeft": 1.35
    },
    "input[type=\"reset\"]icon": {
        "paddingLeft": 1.35
    },
    "input[type=\"button\"]icon": {
        "paddingLeft": 1.35
    },
    "buttonicon": {
        "paddingLeft": 1.35
    },
    "input[type=\"submit\"]icon:before": {
        "marginRight": 0.5,
        "color": "rgba(255, 255, 255, 0.5)"
    },
    "input[type=\"reset\"]icon:before": {
        "marginRight": 0.5,
        "color": "rgba(255, 255, 255, 0.5)"
    },
    "input[type=\"button\"]icon:before": {
        "marginRight": 0.5,
        "color": "rgba(255, 255, 255, 0.5)"
    },
    "buttonicon:before": {
        "marginRight": 0.5,
        "color": "rgba(255, 255, 255, 0.5)"
    },
    "input[type=\"submit\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"reset\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"button\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "buttonfit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"submit\"]small": {
        "fontSize": 0.8
    },
    "input[type=\"reset\"]small": {
        "fontSize": 0.8
    },
    "input[type=\"button\"]small": {
        "fontSize": 0.8
    },
    "buttonsmall": {
        "fontSize": 0.8
    },
    "input[type=\"submit\"]big": {
        "fontSize": 1.35
    },
    "input[type=\"reset\"]big": {
        "fontSize": 1.35
    },
    "input[type=\"button\"]big": {
        "fontSize": 1.35
    },
    "buttonbig": {
        "fontSize": 1.35
    },
    "input[type=\"submit\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"submit\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"reset\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"reset\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"button\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"button\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "buttondisabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "button:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"submit\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "input[type=\"reset\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "input[type=\"button\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "button:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "input[type=\"submit\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "input[type=\"reset\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "input[type=\"button\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "button:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "input[type=\"submit\"]special": {
        "backgroundColor": "#8cc9f0",
        "color": "#ffffff !important",
        "boxShadow": "none"
    },
    "input[type=\"reset\"]special": {
        "backgroundColor": "#8cc9f0",
        "color": "#ffffff !important",
        "boxShadow": "none"
    },
    "input[type=\"button\"]special": {
        "backgroundColor": "#8cc9f0",
        "color": "#ffffff !important",
        "boxShadow": "none"
    },
    "buttonspecial": {
        "backgroundColor": "#8cc9f0",
        "color": "#ffffff !important",
        "boxShadow": "none"
    },
    "input[type=\"submit\"]special:hover": {
        "backgroundColor": "#9acff2"
    },
    "input[type=\"reset\"]special:hover": {
        "backgroundColor": "#9acff2"
    },
    "input[type=\"button\"]special:hover": {
        "backgroundColor": "#9acff2"
    },
    "buttonspecial:hover": {
        "backgroundColor": "#9acff2"
    },
    "input[type=\"submit\"]special:active": {
        "backgroundColor": "#7ec3ee"
    },
    "input[type=\"reset\"]special:active": {
        "backgroundColor": "#7ec3ee"
    },
    "input[type=\"button\"]special:active": {
        "backgroundColor": "#7ec3ee"
    },
    "buttonspecial:active": {
        "backgroundColor": "#7ec3ee"
    },
    "input[type=\"submit\"]specialicon:before": {
        "color": "#ffffff !important"
    },
    "input[type=\"reset\"]specialicon:before": {
        "color": "#ffffff !important"
    },
    "input[type=\"button\"]specialicon:before": {
        "color": "#ffffff !important"
    },
    "buttonspecialicon:before": {
        "color": "#ffffff !important"
    },
    "input[type=\"text\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "borderRadius": 8,
        "border": "solid 1px",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "height": 2.75,
        "background": "rgba(255, 255, 255, 0.075)",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "input[type=\"password\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "borderRadius": 8,
        "border": "solid 1px",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "height": 2.75,
        "background": "rgba(255, 255, 255, 0.075)",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "input[type=\"email\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "borderRadius": 8,
        "border": "solid 1px",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "height": 2.75,
        "background": "rgba(255, 255, 255, 0.075)",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "input[type=\"text\"]:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"password\"]:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"email\"]:invalid": {
        "boxShadow": "none"
    },
    "select:invalid": {
        "boxShadow": "none"
    },
    "textarea:invalid": {
        "boxShadow": "none"
    },
    "select-wrapper": {
        "textDecoration": "none",
        "display": "block",
        "position": "relative"
    },
    "select-wrapper:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "content": "'\\f078'",
        "display": "block",
        "height": 2.75,
        "lineHeight": 2.75,
        "pointerEvents": "none",
        "position": "absolute",
        "right": 0,
        "textAlign": "center",
        "top": 0,
        "width": 2.75,
        "color": "rgba(255, 255, 255, 0.35)"
    },
    "select-wrapper select::-ms-expand": {
        "display": "none"
    },
    "input[type=\"checkbox\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "display": "block",
        "float": "left",
        "marginRight": -2,
        "opacity": 0,
        "width": 1,
        "zIndex": -1
    },
    "input[type=\"radio\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "display": "block",
        "float": "left",
        "marginRight": -2,
        "opacity": 0,
        "width": 1,
        "zIndex": -1
    },
    "input[type=\"checkbox\"] + label": {
        "textDecoration": "none",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 1,
        "fontWeight": "300",
        "paddingLeft": 2.4,
        "paddingRight": 0.75,
        "position": "relative",
        "color": "rgba(255, 255, 255, 0.65)"
    },
    "input[type=\"radio\"] + label": {
        "textDecoration": "none",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 1,
        "fontWeight": "300",
        "paddingLeft": 2.4,
        "paddingRight": 0.75,
        "position": "relative",
        "color": "rgba(255, 255, 255, 0.65)"
    },
    "input[type=\"checkbox\"] + label:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "borderRadius": 8,
        "border": "solid 1px",
        "content": "''",
        "display": "inline-block",
        "height": 1.65,
        "left": 0,
        "lineHeight": 1.58125,
        "position": "absolute",
        "textAlign": "center",
        "top": 0,
        "width": 1.65,
        "background": "rgba(255, 255, 255, 0.075)",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "input[type=\"radio\"] + label:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "borderRadius": "100%",
        "border": "solid 1px",
        "content": "''",
        "display": "inline-block",
        "height": 1.65,
        "left": 0,
        "lineHeight": 1.58125,
        "position": "absolute",
        "textAlign": "center",
        "top": 0,
        "width": 1.65,
        "background": "rgba(255, 255, 255, 0.075)",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "input[type=\"checkbox\"]:checked + label:before": {
        "content": "'\\f00c'",
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "color": "#935d8c"
    },
    "input[type=\"radio\"]:checked + label:before": {
        "content": "'\\f00c'",
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "color": "#935d8c"
    },
    "::-webkit-input-placeholder": {
        "opacity": 1,
        "color": "rgba(255, 255, 255, 0.5) !important"
    },
    ":-moz-placeholder": {
        "opacity": 1,
        "color": "rgba(255, 255, 255, 0.5) !important"
    },
    "::-moz-placeholder": {
        "opacity": 1,
        "color": "rgba(255, 255, 255, 0.5) !important"
    },
    ":-ms-input-placeholder": {
        "opacity": 1,
        "color": "rgba(255, 255, 255, 0.5) !important"
    },
    "formerize-placeholder": {
        "opacity": 1,
        "color": "rgba(255, 255, 255, 0.5) !important"
    },
    "input[type=\"text\"]:focus": {
        "borderColor": "#8cc9f0",
        "boxShadow": "0 0 0 1px #8cc9f0"
    },
    "input[type=\"password\"]:focus": {
        "borderColor": "#8cc9f0",
        "boxShadow": "0 0 0 1px #8cc9f0"
    },
    "input[type=\"email\"]:focus": {
        "borderColor": "#8cc9f0",
        "boxShadow": "0 0 0 1px #8cc9f0"
    },
    "select:focus": {
        "borderColor": "#8cc9f0",
        "boxShadow": "0 0 0 1px #8cc9f0"
    },
    "textarea:focus": {
        "borderColor": "#8cc9f0",
        "boxShadow": "0 0 0 1px #8cc9f0"
    },
    "input[type=\"checkbox\"]:focus + label:before": {
        "borderColor": "#8cc9f0",
        "boxShadow": "0 0 0 1px #8cc9f0"
    },
    "input[type=\"radio\"]:focus + label:before": {
        "borderColor": "#8cc9f0",
        "boxShadow": "0 0 0 1px #8cc9f0"
    },
    "icon": {
        "textDecoration": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "borderBottom": "none",
        "position": "relative"
    },
    "icon:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important"
    },
    "icon > label": {
        "display": "none"
    },
    "iconmajor": {
        "border": "solid 1px",
        "display": "inline-block",
        "borderRadius": "100%",
        "paddingTop": 0.65,
        "paddingRight": 0.65,
        "paddingBottom": 0.65,
        "paddingLeft": 0.65,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "cursor": "default",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "iconmajor:before": {
        "display": "inline-block",
        "fontSize": 6.25,
        "width": 2.25,
        "height": 2.25,
        "lineHeight": 2.2,
        "borderRadius": "100%",
        "border": "solid 1px",
        "textAlign": "center",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "iconalt": {
        "display": "inline-block",
        "border": "solid 1px",
        "borderRadius": "100%",
        "borderColor": "rgba(255, 255, 255, 0.35)",
        "color": "#ffffff"
    },
    "iconalt:before": {
        "display": "block",
        "fontSize": 1.25,
        "width": 2,
        "height": 2,
        "textAlign": "center",
        "lineHeight": 2
    },
    "iconstyle1": {
        "color": "#efa8b0"
    },
    "iconstyle2": {
        "color": "#c79cc8"
    },
    "iconstyle3": {
        "color": "#a89cc8"
    },
    "iconstyle4": {
        "color": "#9bb2e1"
    },
    "iconstyle5": {
        "color": "#8cc9f0"
    },
    "iconalt:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "iconalt:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "image": {
        "borderRadius": 8,
        "border": 0,
        "display": "inline-block",
        "position": "relative"
    },
    "image img": {
        "borderRadius": 8,
        "display": "block"
    },
    "imageleft": {
        "maxWidth": "40%",
        "float": "left",
        "marginTop": 0,
        "marginRight": 1.5,
        "marginBottom": 1,
        "marginLeft": 0,
        "top": 0.25
    },
    "imageright": {
        "maxWidth": "40%",
        "float": "right",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 1.5,
        "top": 0.25
    },
    "imageleft img": {
        "width": "100%"
    },
    "imageright img": {
        "width": "100%"
    },
    "imagefit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "width": "100%"
    },
    "imagefit img": {
        "width": "100%"
    },
    "imagemain": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0,
        "width": "100%"
    },
    "imagemain img": {
        "width": "100%"
    },
    "ol li": {
        "paddingLeft": 0.25
    },
    "ul li": {
        "paddingLeft": 0.5
    },
    "ulalt": {
        "listStyle": "none",
        "paddingLeft": 0
    },
    "ulalt li": {
        "borderTop": "solid 1px",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0,
        "borderTopColor": "rgba(255, 255, 255, 0.35)"
    },
    "ulalt li:first-child": {
        "borderTop": 0,
        "paddingTop": 0
    },
    "ulicons": {
        "cursor": "default",
        "listStyle": "none",
        "paddingLeft": 0
    },
    "ulicons li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 0.65,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulicons li:last-child": {
        "paddingRight": "0 !important"
    },
    "ulactions": {
        "cursor": "default",
        "listStyle": "none",
        "paddingLeft": 0
    },
    "ulactions li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
    },
    "ulactions li:last-child": {
        "paddingRight": 0
    },
    "ulactionssmall li": {
        "paddingTop": 0,
        "paddingRight": 0.5,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsvertical li": {
        "display": "block",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsvertical li:first-child": {
        "paddingTop": 0
    },
    "ulactionsvertical li > *": {
        "marginBottom": 0
    },
    "ulactionsverticalsmall li": {
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsverticalsmall li:first-child": {
        "paddingTop": 0
    },
    "ulactionsfit": {
        "display": "table",
        "marginLeft": -1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "tableLayout": "fixed",
        "width": "calc(100% + 1em)"
    },
    "ulactionsfit li": {
        "display": "table-cell",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1
    },
    "ulactionsfit li > *": {
        "marginBottom": 0
    },
    "ulactionsfitsmall": {
        "marginLeft": -0.5,
        "width": "calc(100% + 0.5em)"
    },
    "ulactionsfitsmall li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.5
    },
    "dl dt": {
        "display": "block",
        "fontWeight": "400",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "color": "#ffffff"
    },
    "dl dd": {
        "marginLeft": 2
    },
    "dlalt dt": {
        "display": "block",
        "width": 3,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "clear": "left",
        "float": "left"
    },
    "dlalt dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.85,
        "marginLeft": 5.5
    },
    "dlalt:after": {
        "content": "''",
        "display": "block",
        "clear": "both"
    },
    "sectionspecial": {
        "textAlign": "center"
    },
    "articlespecial": {
        "textAlign": "center"
    },
    "headermajor": {
        "marginBottom": 3
    },
    "headermajor h2": {
        "fontSize": 2
    },
    "headermajor h2:after": {
        "display": "block",
        "content": "''",
        "width": 3.25,
        "height": 2,
        "marginTop": 0.7,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "borderRadius": 2,
        "backgroundColor": "rgba(255, 255, 255, 0.35)"
    },
    "sectionspecial headermajor h2:after": {
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "articlespecial headermajor h2:after": {
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "headermajor p": {
        "fontSize": 1.25,
        "letterSpacing": -0.025
    },
    "headermajorspecial": {
        "textAlign": "center"
    },
    "headermajorspecial h2:after": {
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "footermajor": {
        "marginTop": 3
    },
    "table-wrapper": {
        "WebkitOverflowScrolling": "touch",
        "overflowX": "auto"
    },
    "table tbody tr": {
        "border": "solid 1px",
        "borderLeft": 0,
        "borderRight": 0,
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "table td": {
        "paddingTop": 0.75,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 0.75
    },
    "table th": {
        "fontSize": 0.9,
        "fontWeight": "400",
        "paddingTop": 0,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 0.75,
        "textAlign": "left",
        "color": "#ffffff"
    },
    "table thead": {
        "borderBottom": "solid 2px",
        "borderBottomColor": "rgba(255, 255, 255, 0.35)"
    },
    "table tfoot": {
        "borderTop": "solid 2px",
        "borderTopColor": "rgba(255, 255, 255, 0.35)"
    },
    "tablealt": {
        "borderCollapse": "separate"
    },
    "tablealt tbody tr td": {
        "border": "solid 1px",
        "borderLeftWidth": 0,
        "borderTopWidth": 0,
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "tablealt tbody tr td:first-child": {
        "borderLeftWidth": 1
    },
    "tablealt tbody tr:first-child td": {
        "borderTopWidth": 1
    },
    "tablealt thead": {
        "borderBottom": 0
    },
    "tablealt tfoot": {
        "borderTop": 0
    },
    "table tbody tr:nth-child(2n + 1)": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "features": {
        "display": "flex",
        "MozFlexWrap": "wrap",
        "WebkitFlexWrap": "wrap",
        "MsFlexWrap": "wrap",
        "flexWrap": "wrap",
        "MozJustifyContent": "center",
        "WebkitJustifyContent": "center",
        "MsJustifyContent": "center",
        "justifyContent": "center",
        "width": "calc(100% + 2em)",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": -2,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "features li": {
        "width": "calc(33.33333% - 2em)",
        "marginLeft": 2,
        "marginTop": 3,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "features li:nth-child(1)": {
        "marginTop": 0
    },
    "features li:nth-child(2)": {
        "marginTop": 0
    },
    "features li:nth-child(3)": {
        "marginTop": 0
    },
    "features li > :last-child": {
        "marginBottom": 0
    },
    "statistics": {
        "display": "flex",
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "cursor": "default"
    },
    "statistics li": {
        "MozFlex": 1,
        "WebkitFlex": 1,
        "MsFlex": 1,
        "flex": 1,
        "paddingTop": 1.5,
        "paddingRight": 1.5,
        "paddingBottom": 1.5,
        "paddingLeft": 1.5,
        "color": "#ffffff",
        "textAlign": "center"
    },
    "statistics listyle1": {
        "backgroundColor": "#efa8b0"
    },
    "statistics listyle2": {
        "backgroundColor": "#c79cc8"
    },
    "statistics listyle3": {
        "backgroundColor": "#a89cc8"
    },
    "statistics listyle4": {
        "backgroundColor": "#9bb2e1"
    },
    "statistics listyle5": {
        "backgroundColor": "#8cc9f0"
    },
    "statistics li strong": {
        "display": "block",
        "fontSize": 2,
        "lineHeight": 1.1,
        "color": "inherit !important",
        "fontWeight": "300",
        "letterSpacing": -0.025
    },
    "statistics li b": {
        "display": "block",
        "fontSize": 2,
        "lineHeight": 1.1,
        "color": "inherit !important",
        "fontWeight": "300",
        "letterSpacing": -0.025
    },
    "statistics li:first-child": {
        "borderTopLeftRadius": 8,
        "borderBottomLeftRadius": 8
    },
    "statistics li:last-child": {
        "borderTopRightRadius": 8,
        "borderBottomRightRadius": 8
    },
    "statistics li icon": {
        "display": "inline-block"
    },
    "statistics li icon:before": {
        "fontSize": 2.75,
        "lineHeight": 1.3
    },
    "spotlight": {
        "display": "flex",
        "MozAlignItems": "center",
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "spotlight_reverse": {
        "display": "flex",
        "MozAlignItems": "center",
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "spotlight content": {
        "MozFlex": 1,
        "WebkitFlex": 1,
        "MsFlex": 1,
        "flex": 1,
        "WebketFlexOrder": 0,
        "order": 0
    },
    "spotlight_reverse content_right": {
        "MozFlex": 1,
        "WebkitFlex": 1,
        "MsFlex": 1,
        "flex": 1,
        "WebketFlexOrder": 1,
        "order": 1
    },
    "spotlight content > :last-child": {
        "marginBottom": 0
    },
    "spotlight content last_p p": {
        "marginBotton": 2
    },
    "spotlight content p": {
        "marginBottom": 0
    },
    "spotlight content headermajor": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "spotlight_reverse content_right > :last-child": {
        "marginBottom": 0
    },
    "spotlight_reverse content_right headermajor": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "spotlight image": {
        "display": "inline-block",
        "marginLeft": 4,
        "paddingTop": 0.65,
        "paddingRight": 0.65,
        "paddingBottom": 0.65,
        "paddingLeft": 0.65,
        "borderRadius": "100%",
        "border": "solid 1px",
        "borderColor": "rgba(255, 255, 255, 0.35)"
    },
    "spotlight_reverse image_left": {
        "display": "inline-block",
        "marginLeft": 1,
        "marginRight": 4,
        "paddingTop": 0.65,
        "paddingRight": 0.65,
        "paddingBottom": 0.65,
        "paddingLeft": 0.65,
        "borderRadius": "100%",
        "border": "solid 1px",
        "borderColor": "rgba(0, 0, 0, 0.15)"
    },
    "spotlight image img": {
        "display": "block",
        "borderRadius": "100%",
        "width": 16,
        "WebkitFlexOrder": 1
    },
    "spotlight_reverse image_left img": {
        "display": "block",
        "borderRadius": "100%",
        "width": 16,
        "WebkitFlexOrder": 1
    },
    "spotlight_reverse content generic-wrapper": {
        "marginLeft": 10
    },
    "spotlight content_right reverse-generic-wrapper": {
        "marginRight": 10
    },
    "generic-header": {
        "display": "inline-block",
        "MozAlignItems": "center",
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center",
        "paddingTop": 2.375,
        "paddingRight": 0,
        "paddingBottom": 2.375,
        "paddingLeft": 0,
        "position": "relative",
        "zIndex": 3,
        "backgroundColor": "#FFFFFF"
    },
    "spotlight_reverse content ": {
        "textAlign": "center"
    },
    "spotlight_reverse  image-generic": {
        "display": "inline-block",
        "paddingTop": 0.65,
        "paddingRight": 0.65,
        "paddingBottom": 0.65,
        "paddingLeft": 0.65
    },
    "spotlight_reverse  image-generic img": {
        "display": "block"
    },
    "spotlight  image-generic-reverse": {
        "display": "inline-block",
        "paddingTop": 0.65,
        "paddingRight": 0.65,
        "paddingBottom": 0.65,
        "paddingLeft": 0.65
    },
    "spotlight image-generic-reverse img": {
        "display": "block"
    },
    "generic-spotlight-reverse": {
        "display": "flex",
        "WebkitAlignItems": "center",
        "alignItems": "center",
        "WebkitJustifyContent": "center",
        "justifyContent": "center"
    },
    "generic-spotlight": {
        "display": "flex",
        "WebkitAlignItems": "center",
        "alignItems": "center",
        "WebkitJustifyContent": "center",
        "justifyContent": "center"
    },
    "text-area": {
        "display": "block",
        "MozAlignItems": "center",
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 2.375,
        "paddingRight": 0,
        "paddingBottom": 2.375,
        "paddingLeft": 0,
        "position": "relative",
        "zIndex": 3,
        "backgroundColor": "#FFFFFF",
        "textAlign": "center"
    },
    "text-area h2": {
        "fontSize": 2
    },
    "col": {
        "width": "33%"
    },
    "profile": {
        "display": "flex",
        "MozAlignItems": "center",
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "profile content": {
        "MozFlex": 1,
        "WebkitFlex": 1,
        "MsFlex": 1,
        "flex": 1,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "profile content description": {
        "textAlign": "center"
    },
    "profile image": {
        "display": "inline-block",
        "paddingTop": 0.3,
        "paddingRight": 0.3,
        "paddingBottom": 0.3,
        "paddingLeft": 0.3,
        "borderRadius": "100%",
        "border": "solid 1px",
        "verticalAlign": "center"
    },
    "profile image img": {
        "display": "block",
        "borderRadius": "100%",
        "width": 7
    },
    "profile col content description big-text h3": {
        "textAlign": "center",
        "fontWeight": "600",
        "fontSize": 22
    },
    "social-buttons": {
        "position": "relative",
        "paddingTop": 1,
        "borderTop": "1px solid #DDDDDD",
        "textAlign": "center"
    },
    "social-buttons icons": {},
    "intropage": {
        "textAlign": "center"
    },
    "textBox": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "headeralt home": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0
    },
    "header h1": {
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.25,
        "marginLeft": 0
    },
    "header p": {
        "font": "400 100px/1.3 'Oleo Script', Helvetica, sans-serif",
        "fontSize": 3,
        "letterSpacing": -0.025
    },
    "headeralt": {
        "paddingTop": 2,
        "paddingRight": 5,
        "paddingBottom": 4,
        "paddingLeft": 5
    },
    "headeralt h1": {
        "fontSize": 3.25
    },
    "headeralt textBox": {
        "MozTransition": "opacity 3s ease",
        "WebkitTransition": "opacity 3s ease",
        "MsTransition": "opacity 3s ease",
        "transition": "opacity 3s ease",
        "MozTransitionDelay": "0.5s",
        "WebkitTransitionDelay": "0.5s",
        "MsTransitionDelay": "0.5s",
        "transitionDelay": "0.5s",
        "opacity": 1
    },
    "headeralt logo": {
        "MozTransition": "opacity 1.25s ease, -moz-transform 0.5s ease",
        "WebkitTransition": "opacity 1.25s ease, -webkit-transform 0.5s ease",
        "MsTransition": "opacity 1.25s ease, -ms-transform 0.5s ease",
        "transition": "opacity 1.25s ease, transform 0.5s ease",
        "MozTransitionDelay": "0s",
        "WebkitTransitionDelay": "0s",
        "MsTransitionDelay": "0s",
        "transitionDelay": "0s",
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1.5,
        "marginLeft": 0
    },
    "headeralt logo img": {
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxWidth": "75%"
    }
});