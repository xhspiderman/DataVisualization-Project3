# This is the script for grabbing the content out of a group of websites specified in url2output.txt file
#Tuned for grabbing the content of Wikisimpsons.com (Characters,episodes and image files) out of one specific website

import urllib2
from bs4 import BeautifulSoup
import pdb
import re

# opens the result file
resultFile = open("output_character.txt", "r+")
# get the 2940 urls for each characters
sources = []
my_file = open('workingurl.txt', 'r')
temp = my_file.readline()
while temp:
	sources.append(temp)
	temp = my_file.readline()
my_file.close()
count = 0
for source in sources:
	character_occupation="unknown"
	character_hair="unknown"
	character_voicedBy="unknown"
	# opens target url or urls
	count += 1
	print count
	page = urllib2.urlopen(source[:-1]).read()
	soup = BeautifulSoup(page)
	#  get the character
	character = soup.find(id='WikiaPageHeader').find('h1').string
	#get images url
	if soup.find(id='mw-content-text').find_all('img'):
		try:
			image = soup.find(id='mw-content-text').find_all('img')[0]['data-src']
		except KeyError:
			image = soup.find(id='mw-content-text').find_all('img')[0]['src']
		print image
	else:
		image = "none"
	#get character info
	if soup.find(id='mw-content-text').find_all('table'):
		characterDIV=soup.find(id='mw-content-text').find_all('table')[0].find_all('td')
		#get table with info
		for row in characterDIV:
	#		#get gender and status
	#		if row.find('a'):
	#			genderCharacterinfo = str(row.find('a')['href']).lower()
	#		else:
	#			genderCharacterinfo = "unknown"
	#		if "category:male_characters" in genderCharacterinfo:
	#			character_gender="male"
	#		if "category:female_characters" in genderCharacterinfo:
	#			character_gender="female"
	#		if "category:alive_characters" in genderCharacterinfo:
	#			character_status="alive"
	#		if "category:deceased_characters" in genderCharacterinfo:
	#			character_status="deceased"
			#get rest of attributes
			if row.find_all('b'):
				moreCharacterinfoDIV= row.find_all('b')
				for element in moreCharacterinfoDIV:
					#get hair color
					if "Hair" in element:
						character_hair=str(row.find_next_sibling()).split('<td>')[1].split('</td>')[0].split('\n')[0]
	#				#get character occupation
	#				if "Occupation" in element:
	#					#pdb.set_trace()
	#					character_occupation=str(row.find_next_sibling()).split('<td>')[1].split('</td>')[0].split('\n')[0]
	#				if "Voiced By" in element:
	#					#pdb.set_trace()
	#					character_voicedBy=str(row.find_next_sibling().get_text()).split('\n')[0]
	else:
		character_gender ="unknown"
	print(character+ " " + character_hair + " " + image)
	# outtput the result as one to one data format into result file
	resultFile.write(character.encode('UTF-8')+'***')
	#resultFile.write('"'+character_gender.encode('UTF-8')+'"'+'   ')
	#resultFile.write('"'+character_status.encode('UTF-8')+'"'+'   ')
	resultFile.write(character_hair.encode('UTF-8')+'***')
	#resultFile.write('"'+character_occupation.encode('UTF-8')+'"'+'   ')
	#resultFile.write('"'+character_voicedBy.encode('UTF-8')+'"'+'   ')
	resultFile.write(image.encode('UTF-8')+'***')
	resultFile.write('\n')
resultFile.close()