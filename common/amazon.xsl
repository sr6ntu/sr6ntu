<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:comment>Amazon RSS XSL transformation -</xsl:comment> 
<rss version="0.91">
<channel>
<xsl:for-each select="ProductInfo/Request/Args">
<title>Amazon.com Search for 
<xsl:for-each select="Arg">
<xsl:if test="@name[.='KeywordSearch']"> 
<xsl:value-of select="@value" /> 
</xsl:if> 
</xsl:for-each>
</title>
<link>http:/www.amazon.com</link> 
<description>Amazon.com Search Results for 
<xsl:for-each select="Arg">
<xsl:if test="@name[.='KeywordSearch']"> 
<xsl:value-of select="@value" /> in
</xsl:if> 
<xsl:if test="@name[.='mode']"> 
<xsl:value-of select="@value" /> 
</xsl:if>
</xsl:for-each>
</description>
<docs>http://www.amazon.com/exec/obidos/subst/xs/syndicate.html</docs> 
<image>
<title>Amazon.com--Earth's Biggest Selection</title> 
<url>http://images.amazon.com/images/G/01/rcm/logo2.gif</url> 
<width>120</width> 
<height>30</height> 
<link>http://www.amazon.com</link> 	 
</image>
</xsl:for-each>
<xsl:for-each select="ProductInfo/Details">
<item>
<title><xsl:value-of select="ProductName" /></title>
<link><xsl:value-of select="@url" /></link>
<description> by 
<xsl:for-each select="Authors/Author">
<xsl:value-of select="." />, 
</xsl:for-each> manufactured by 
<xsl:value-of select="Manufacturer" />.
<xsl:value-of select="Availability" />.
<br/>List Price:<xsl:value-of select="ListPrice" /> 
 -<b>Our Price:<xsl:value-of select="OurPrice" /></b> 
 -<i>Used Price:<xsl:value-of select="UsedPrice" /></i>
</description> 
<pubDate><xsl:value-of select="ReleaseDate" /></pubDate>
<Asin><xsl:value-of select="Asin" /></Asin>
<imgS><xsl:value-of select="ImageUrlSmall" /></imgS>
<imgM><xsl:value-of select="ImageUrlMedium" /></imgM>
<imgL><xsl:value-of select="ImageUrlLarge" /></imgL>
</item>	
</xsl:for-each>
</channel>
</rss>
 
</xsl:template>
</xsl:stylesheet>
