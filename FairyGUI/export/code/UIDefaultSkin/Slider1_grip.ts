/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class Slider1_grip extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;

		public static URL:string = "ui://snq31xvrsfsc46";

		public static createInstance():Slider1_grip {
			return <Slider1_grip><any>(fairygui.UIPackage.createObject("UIDefaultSkin","Slider1_grip"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
		}
	}
}