import { Plane } from "@react-three/drei";
import { folder, useControls } from "leva";
import { LEVA_FOLDERS } from "../constants";

export default function FloorComponent() {
  const { topLeftColor, bottomLeftColor, topRightColor, bottomRightColor } =
    useControls(
      LEVA_FOLDERS.materials.label,
      {
        Floor: folder(
          {
            topLeftColor: "#ffcf9c",
            topRightColor: "#d28635",
            bottomLeftColor: "#a4886a",
            bottomRightColor: "#efc69a",
          },
          { ...LEVA_FOLDERS.endProps }
        ),
      },
      { ...LEVA_FOLDERS.endProps }
    );
  return (
    <Plane
      args={[2, 2]}
      frustumCulled={false}
      matrixWorldAutoUpdate={false}
      getObjectsByProperty={undefined}
      getVertexPosition={undefined}
    >
      <floorMaterial
        topLeftColor={topLeftColor}
        bottomLeftColor={bottomLeftColor}
        topRightColor={topRightColor}
        bottomRightColor={bottomRightColor}
      />
    </Plane>
  );
}
