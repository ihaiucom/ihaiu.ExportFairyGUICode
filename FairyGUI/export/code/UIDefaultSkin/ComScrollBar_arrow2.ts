/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComScrollBar_arrow2 extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;

		public static URL:string = "ui://snq31xvrsfsc42";

		public static createInstance():ComScrollBar_arrow2 {
			return <ComScrollBar_arrow2><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComScrollBar_arrow2"));
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