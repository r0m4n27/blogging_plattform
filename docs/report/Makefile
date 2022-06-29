# Inspired by https://keleshev.com/my-book-writing-setup/
# Also adapted from https://github.com/cagix/pandoc-thesis

# Create directories
DIRS = build build/latex
$(shell mkdir -p $(DIRS))

##################
# Markdown files #
##################

CHAPTERS = $(wildcard chapters/*.md)

TEX_TITLEPAGE = build/latex/titlepage.tex
TEX_FILES = $(TEX_TITLEPAGE)

PANDOCFLAGS = \
	--pdf-engine=xelatex \
	-f markdown \
	--lua-filter=build/include-files.lua \
	--metadata-file=metadata.yml \
	--include-in-header=$(TEX_TITLEPAGE) \
	--citeproc \
	-M bibliography=references.bib \
	-M link-citations=true \
	--csl=build/ieee.csl

.PHONY: all
all: build/dokumentation.pdf

build/dokumentation.pdf: main.md $(CHAPTERS) Makefile references.bib build/include-files.lua build/ieee.csl $(TEX_FILES)
	pandoc main.md $(PANDOCFLAGS) -o $@

###############
# LaTeX files #
###############

build/latex/%.tex: latex/%.tex metadata.yml
	pandoc --wrap=preserve --metadata-file=metadata.yml --template=$< -o $@ $<

######################
# Build dependencies #
######################

INCLUDE_FILES_URL = "https://raw.githubusercontent.com/pandoc/lua-filters/master/include-files/include-files.lua"

build/include-files.lua:
	curl $(INCLUDE_FILES_URL) -o build/include-files.lua

IEEE_CSL_URL = "https://www.zotero.org/styles/ieee-with-url"

build/ieee.csl:
	curl $(IEEE_CSL_URL) -o build/ieee.csl

########
# Misc #
########

.PHONY: clean
clean:
	rm -rf build/

.PHONY: open
open: build/dokumentation.pdf
	open build/dokumentation.pdf

.PHONY: watch
watch:
	watchman-make -p 'main.md' 'Makefile' 'metadata.yml' 'latex/*.tex' 'chapters/*.md' 'references.bib' -t all
