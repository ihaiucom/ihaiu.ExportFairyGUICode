/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class Slider1 extends fairygui.GSlider {

		public n1:fairygui.GImage;
		public bar:fairygui.GImage;
		public title:fairygui.GTextField;
		public grip:Slider1_grip;

		public static URL:string = "ui://snq31xvrsfsc47";

		public static createInstance():Slider1 {
			return <Slider1><any>(fairygui.UIPackage.createObject("UIDefaultSkin","Slider1"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.bar = <fairygui.GImage><any>(this.getChild("bar"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.grip = <Slider1_grip><any>(this.getChild("grip"));
		}
	}
}