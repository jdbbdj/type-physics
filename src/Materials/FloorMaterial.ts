import {
  Color,
  DataTexture,
  LinearFilter,
  RGBAFormat,
  ShaderMaterial,
} from "three";

import vertexShader from "../Shaders/Floor/vertex.glsl";
import fragmentShader from "../Shaders/Floor/fragment.glsl";
export class FloorMaterial extends ShaderMaterial {
  private _topLeftColor: Color = new Color();
  private _topRightColor: Color = new Color();
  private _bottomLeftColor: Color = new Color();
  private _bottomRightColor: Color = new Color();

  constructor() {
    super();

    this.uniforms = {
      tBackground: { value: null },
    };
    this.fragmentShader = fragmentShader;
    this.vertexShader = vertexShader;
  }

  set topLeftColor(color: any) {
    this._topLeftColor = new Color(color).convertLinearToSRGB();
    this.updateUniforms();
  }

  set topRightColor(color: any) {
    this._topRightColor = new Color(color).convertLinearToSRGB();
    this.updateUniforms();
  }

  set bottomLeftColor(color: any) {
    this._bottomLeftColor = new Color(color).convertLinearToSRGB();
    this.updateUniforms();
  }

  set bottomRightColor(color: any) {
    this._bottomRightColor = new Color(color).convertLinearToSRGB();
    this.updateUniforms();
  }

  private updateUniforms() {
    const data = new Uint8Array([
      Math.round(this._bottomLeftColor.r * 255),
      Math.round(this._bottomLeftColor.g * 255),
      Math.round(this._bottomLeftColor.b * 255),
      255,
      Math.round(this._bottomRightColor.r * 255),
      Math.round(this._bottomRightColor.g * 255),
      Math.round(this._bottomRightColor.b * 255),
      255,
      Math.round(this._topLeftColor.r * 255),
      Math.round(this._topLeftColor.g * 255),
      Math.round(this._topLeftColor.b * 255),
      255,
      Math.round(this._topRightColor.r * 255),
      Math.round(this._topRightColor.g * 255),
      Math.round(this._topRightColor.b * 255),
      255,
    ]);

    const backgroundTexture = new DataTexture(data, 2, 2, RGBAFormat);
    backgroundTexture.magFilter = LinearFilter;
    backgroundTexture.needsUpdate = true;

    this.uniforms.tBackground.value = backgroundTexture;
  }
}
