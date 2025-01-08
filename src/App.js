
import { Cartesian3, Color, Ion } from "cesium";
import { Viewer, Entity } from "resium";
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYWM2OGNiZS0zNTZkLTQxMjgtYTE1NS1jYTFhZDAxYjk5ZWIiLCJpZCI6MjYzNDk5LCJpYXQiOjE3MzQ1ODA4MDd9.tgVOMxzJsEnntRiCblEHEZ_xG2_Bg4JbnnrMYl6kSMU';

export default function App() {
  return (
    <Viewer full>
      <Entity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 10, color: Color.WHITE }}
        description="hoge"
      />
    </Viewer>
  );
}
