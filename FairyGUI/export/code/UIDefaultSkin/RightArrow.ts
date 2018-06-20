/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class RightArrow extends fairygui.GComponent {

		public pic:fairygui.GImage;
		public t0:fairygui.Transition;

		public static URL:string = "ui://snq31xvro24g3r";

		public static createInstance():RightArrow {
			return <RightArrow><any>(fairygui.UIPackage.createObject("UIDefaultSkin","RightArrow"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.pic = <fairygui.GImage><any>(this.getChild("pic"));
			this.t0 = this.getTransition("t0");
		}
	}
}