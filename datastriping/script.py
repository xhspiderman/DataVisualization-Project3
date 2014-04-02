# This is the script for grabbing the content out of a group of websites specified in url2output.txt file
#Tuned for grabbing the content of Wikisimpsons.com (Characters,episodes and image files) out of one specific website

import urllib2
from bs4 import BeautifulSoup
import pdb
import re

# opens the result file
resultFile = open("output_single.txt", "r+")
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
	# opens target url or urls
	count += 1
	print count
	print source
	page = urllib2.urlopen(source[:-1]).read()
	soup = BeautifulSoup(page)
	#  get the character
	character = soup.find(id='WikiaPageHeader').find('h1').string
	#  get the episodes the character is in
	checkDIV = soup.find(id=re.compile("^Appearance"))
	if checkDIV:
		episodesDIV = checkDIV.find_parent("h2").find_next_sibling()
	else:
		episodesDIV = None
	
	if episodesDIV:
		episodes1 = episodesDIV.find_all(text="Episode")
		episodes2 = episodesDIV.find_all(text="THOH")
		episodes = episodes1+episodes2
		if not episodes:
			episodes = ["none"]
	else:
		episodes = ["none"]
	#get images url

	if soup.find(id='mw-content-text').find_all('img'):
		try:
			image = soup.find(id='mw-content-text').find_all('img')[0]['data-src']
		except KeyError:
			image = soup.find(id='mw-content-text').find_all('img')[0]['src']
		print image
	else:
		image = None
	# output the result as one to one data format into result file
	for episode in episodes:
		resultFile.write('"'+character.encode('UTF-8')+'"'+'   ')
		if (episode != "none" and image):
		    episode_name = episode.find_parent('i').find_next_sibling('a').string
		else:
			episode_name = episode
			image = "none" 
		resultFile.write('  "'+episode_name.encode('UTF-8')+'"'+'   ')
		resultFile.write('"'+image.encode('UTF-8')+'"')
		resultFile.write('\n')
resultFile.close()