<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:aws="http://webservices.amazon.com/AWSECommerceService/2005-10-05" exclude-result-prefixes="aws">

	<xsl:output method="xml"/>

	<xsl:template match="/">
	<rss version="2.0">
	<channel>
	<title>Amazon.com: <xsl:value-of select="aws:ItemSearchResponse/aws:OperationRequest/aws:Arguments/aws:Argument[@Name = 'Power']/@Value"/><xsl:value-of select="aws:ItemSearchResponse/aws:OperationRequest/aws:Arguments/aws:Argument[@Name = 'Keywords']/@Value"/> in <xsl:value-of select="aws:ItemSearchResponse/aws:OperationRequest/aws:Arguments/aws:Argument[@Name = 'Catalog']/@Value"/></title>
	<link>http://www.amazon.com</link>
	<description>A feed of <xsl:value-of select="aws:ItemSearchResponse/aws:OperationRequest/aws:Arguments/aws:Argument[@Name = 'Catalog']/@Value"/> with the keyword(s) '<xsl:value-of select="aws:ItemSearchResponse/aws:OperationRequest/aws:Arguments/aws:Argument[@Name = 'Power']/@Value"/><xsl:value-of select="aws:ItemSearchResponse/aws:OperationRequest/aws:Arguments/aws:Argument[@Name = 'Keywords']/@Value"/>' found on Amazon.com, sorted by <xsl:value-of select="aws:ItemSearchResponse/aws:OperationRequest/aws:Arguments/aws:Argument[@Name = 'SortBy']/@Value"/>, and created with the Rss Feeds Generator (http://kong-tp-demo.startdirectory-trix.info).</description>
	<language>en-us</language>
	<xsl:apply-templates/>
	</channel>
	</rss>
	</xsl:template>
	
	<xsl:template match="aws:RequestId"/>
	<xsl:template match="aws:RequestProcessingTime"/>
	<xsl:template match="aws:Items">
		<xsl:apply-templates select="aws:Item"/>
	</xsl:template>

	<xsl:template match="aws:Item">
		<item>
		<title><xsl:value-of select="aws:ItemAttributes/aws:Title"/></title>
		<link>http://www.amazon.com/exec/obidos/ASIN/<xsl:value-of select="aws:ASIN"/>/sciencegifts-20/<xsl:value-of select="//aws:ItemSearchResponse/aws:OperationRequest/aws:Arguments/aws:Argument[@Name = 'AssociateTag']/@Value"/></link>
		<description>
		<xsl:if test="aws:EditorialReviews/aws:EditorialReview/aws:Content">
			<xsl:value-of select="aws:EditorialReviews/aws:EditorialReview/aws:Content"/>
		</xsl:if>
		</description>
		<simage>
			<xsl:if test="aws:SmallImage/aws:URL">
			    &lt;img src="<xsl:value-of select="aws:SmallImage/aws:URL"/>"	width="<xsl:value-of select="aws:SmallImage/aws:Width"/>"	height="<xsl:value-of select="aws:SmallImage/aws:Height"/>" alt="<xsl:value-of select="aws:ItemAttributes/aws:Title"/>" style="border:solid 0px;" /&gt;
			</xsl:if>
		</simage>
		<mimage>
			<xsl:if test="aws:MediumImage/aws:URL">
			    &lt;img src="<xsl:value-of select="aws:MediumImage/aws:URL"/>"	width="<xsl:value-of select="aws:MediumImage/aws:Width"/>"	height="<xsl:value-of select="aws:MediumImage/aws:Height"/>" alt="<xsl:value-of select="aws:ASIN"/>" hspace="5" vspace="5" align="left" style="border:solid 0px;" /&gt;
			</xsl:if>
		</mimage>
		<imgurl>
			<xsl:if test="aws:LargeImage/aws:URL">
			    <xsl:value-of select="aws:LargeImage/aws:URL"/>
			</xsl:if>
		</imgurl>
		<detail>
		&lt;b&gt;Company:&lt;/b&gt; <xsl:value-of select="aws:ItemAttributes/aws:Manufacturer"/> 
		<xsl:if test="aws:ItemAttributes/aws:PublicationDate">
		(<xsl:value-of select="aws:ItemAttributes/aws:PublicationDate"/>)
		</xsl:if>
		<xsl:if test="aws:ItemAttributes/aws:ReleaseDate">
		(<xsl:value-of select="aws:ItemAttributes/aws:ReleaseDate"/>)
		</xsl:if>
		&lt;br /&gt;
		<xsl:if test="aws:ItemAttributes/aws:ISBN">
		&lt;b&gt;ISBN:&lt;/b&gt; <xsl:value-of select="aws:ItemAttributes/aws:ISBN"/>&lt;br /&gt;
		</xsl:if>
		&lt;b&gt;List Price:&lt;/b&gt; <xsl:value-of select="aws:ItemAttributes/aws:ListPrice/aws:FormattedPrice"/>&lt;br /&gt;
		&lt;b&gt;Amazon Price: <xsl:value-of select="aws:OfferSummary/aws:LowestNewPrice/aws:FormattedPrice"/>&lt;/b&gt; &lt;br /&gt;
		<xsl:if test="aws:OfferSummary/aws:LowestUsedPrice/aws:FormattedPrice">
			&lt;b&gt;Used Price:&lt;/b&gt; <xsl:value-of select="aws:OfferSummary/aws:LowestUsedPrice/aws:FormattedPrice"/>&lt;br /&gt;
		</xsl:if>
		</detail>
		</item>

	</xsl:template>
	
</xsl:stylesheet>