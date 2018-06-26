/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class TestOtherPackageImage extends fairygui.GComponent {

		public n0:fairygui.GImage;

		public static URL:string = "ui://snq31xvrhkst4k";

		public static createInstance():TestOtherPackageImage {
			return <TestOtherPackageImage><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestOtherPackageImage"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
		}
	}
}