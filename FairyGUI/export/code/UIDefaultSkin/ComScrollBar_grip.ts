/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComScrollBar_grip extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;

		public static URL:string = "ui://snq31xvrsfsc43";

		public static createInstance():ComScrollBar_grip {
			return <ComScrollBar_grip><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComScrollBar_grip"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
		}
	}
}