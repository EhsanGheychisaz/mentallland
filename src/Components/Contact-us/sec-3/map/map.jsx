import React from "react";
import Mapir from "mapir-react-component";

const Map = Mapir.setToken({
  transformRequest: url => {
    return {
      url: url,
      headers: {
        "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUyYjI0ZjI1ODNkNTNlODNjMDk1N2VjOGUwNDM3ODg1YTBiMWQ2MWFmMjQ5MTY0Mzg5MDM3NzFjNmUwYTJkNTJjYWUxNTBmNGJmOWNhNGI1In0.eyJhdWQiOiIyMTI1NSIsImp0aSI6IjUyYjI0ZjI1ODNkNTNlODNjMDk1N2VjOGUwNDM3ODg1YTBiMWQ2MWFmMjQ5MTY0Mzg5MDM3NzFjNmUwYTJkNTJjYWUxNTBmNGJmOWNhNGI1IiwiaWF0IjoxNjc3MjM5Mjg5LCJuYmYiOjE2NzcyMzkyODksImV4cCI6MTY3OTY1ODQ4OSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.BhWLO0g6IX7lZCsr38eF3dS1tjQnWEv2JPylhtGOABDmB_0X1xYmQPAIn-FJOn3opx03lfSbHQjlernhQGXVyDtGigOtXsAXP3JiYiBA6A0jaAYV-QhEJbvukGMtBfTGaD3g2fU31tzKNR-joTUtzVp14PbRwr3pBC-iRsCYI0apsttPqrTjrGtx2kNT6AQp_iKY66rJqoz32AOW04phnFfSJSSB3aNRcn1lvSShGMr0oNNcKWTqfCAJmWM3eQ1lmD15etJnQMGGWUViynn5GW8XRrtYR5dp8SgSf_6cB6pkh7dUlmbN_sxoWmC8gfIAI9rc7DS-F4Ti3u9z1T9yBA', //Mapir api key
        "Mapir-SDK": "reactjs"
      }
    };
  }
});
const MapApp = () => {
  return (
    <div className="App">
      <Mapir center={[51.42047, 35.729054]} Map={Map} />
    </div>
  );
};

export default MapApp;