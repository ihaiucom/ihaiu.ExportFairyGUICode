/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComScrollBar extends fairygui.GScrollBar {

		public n1:fairygui.GImage;
		public bar:fairygui.GGraph;
		public arrow1:ComScrollBar_arrow1;
		public arrow2:ComScrollBar_arrow2;
		public grip:ComScrollBar_grip;

		public static URL:string = "ui://snq31xvrsfsc44";

		public static createInstance():ComScrollBar {
			return <ComScrollBar><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComScrollBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.bar = <fairygui.GGraph><any>(this.getChild("bar"));
			this.arrow1 = <ComScrollBar_arrow1><any>(this.getChild("arrow1"));
			this.arrow2 = <ComScrollBar_arrow2><any>(this.getChild("arrow2"));
			this.grip = <ComScrollBar_grip><any>(this.getChild("grip"));
		}
	}
}