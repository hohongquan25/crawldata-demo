import React, { useEffect, useState } from 'react';
import Button from '@mui/joy/Button';
import {
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  CssVarsProvider,
  Input,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  styled,
  SvgIcon,
  Typography,
  Sheet,
  ModalClose,
  Alert,
  IconButton
} from '@mui/joy';
import { ImageList, ImageListItem } from '@mui/material';
import MDEditor from '@uiw/react-md-editor';
import WarningIcon from '@mui/icons-material/Warning';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import BackspaceIcon from '@mui/icons-material/Backspace';
import CloseIcon from '@mui/icons-material/Close';
import { exportExcelData, getDetailProduct, uploadFile } from 'api/crawlData';
import { useAuth } from 'contexts/auth-reducer/AuthContext';
import ListProductReview from './list-product';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function CrawlData() {
  const {
    auth: { token }
  } = useAuth();

  // Default values
  const defaultColors = ['Xanh', 'Nâu', 'Đen'];
  const defaultSizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];
  const defaultTypes = ['T-Shirt', 'Sweatshirt', 'Hoodie'];

  // Dữ liệu exprot
  const [title, setTitle] = useState('');
  const [fileNameExcel, setFileNameExcel] = useState('');
  const [typeInput, setValue] = useState('link');
  const [crawlLink, setCrawlLink] = useState('');
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [newValue, setNewValue] = useState('');
  const [selectedColors, setSelectedColors] = useState(defaultColors);
  const [selectedSizes, setSelectedSizes] = useState(defaultSizes);
  const [selectedTypes, setSelectedTypes] = useState(defaultTypes);
  const [listColors, setListColors] = useState(defaultColors);
  const [listSizes, setListSizes] = useState(defaultSizes);
  const [listTypes, setListTypes] = useState(defaultTypes);
  const [errorMessage, setErrorMessage] = useState('');
  const [markdownValue, setMarkdownValue] = useState(`
    <div class="container">
        <h1>WELCOME TO MY SHOP!!</h1>
        <h2>About this item:</h2>
        <p><span class="highlight">Material:</span> Women Y2K crop tops 2000s aesthetic baby tee t-shirts are made of 100% cotton material, lightweight, safe to skin, and easy to wash. No worrying that it will do harm to your skin.</p>
        <p><span class="highlight">Design:</span> Going out tops for women, baby tees trashy Y2K cutecore gyaru aesthetic Pinterest shirt, short sleeve, round neck, solid color/pattern print, slim fit, crop tops, very all-match.</p>
        <p><span class="highlight">Occasion:</span> Women's kawaii retro chic fashion cropped tops are suitable for casual daily wear, outdoor activity, clubwear, streetwear, beach, travel, festival, dating, friends party, photography outfit and so on.</p>
        <p><span class="highlight">All-match:</span> Summer short sleeve crew neck graphic print crop tops for women is the perfect choice for friends party! Just simply add high heels and clutch! Style yours according to your event!</p>
    </div>
  `);
  console.log('🚀 ~ CrawlData ~ markdownValue:', markdownValue);

  const [currentImages, setCurrentImages] = useState([]);
  const urls = currentImages.map((image) => image.url);

  // State for size prices
  const [sizePrices, setSizePrices] = useState(
    defaultSizes.reduce((acc, size, index) => {
      acc[size] = 10 + index;
      return acc;
    }, {})
  );

  const handleSizePriceChange = (size, event) => {
    const newSizePrices = {
      ...sizePrices,
      [size]: event.target.value
    };
    setSizePrices(newSizePrices);
    updateVariantData(size, 'price', event.target.value);
  };

  // State for dimensions per type
  const [dimensions, setDimensions] = useState({
    'T-Shirt': { length: 4, width: 5, height: 6, weight: 7 },
    Sweatshirt: { length: 7, width: 6, height: 7, weight: 8 },
    Hoodie: { length: 9, width: 10, height: 12, weight: 11 }
  });

  const handleDimensionChange = (type, dimension, value) => {
    const newDimensions = {
      ...dimensions,
      [type]: {
        ...dimensions[type],
        [dimension]: value
      }
    };
    setDimensions(newDimensions);
    selectedTypes.forEach((selectedType) => {
      if (selectedType === type) {
        updateVariantData(type, dimension, value);
      }
    });
  };

  // Update variantData state
  const updateVariantData = (key, field, value) => {
    const updatedVariants = variantData.map((variant) => {
      if (variant.size === key || variant.category === key) {
        return {
          ...variant,
          [field]: value
        };
      }
      return variant;
    });
    setVariantData(updatedVariants);
  };

  // Size Chart
  const [listSizeCharUrl, setListSizeCharUrl] = useState([]); // phát triển sau
  const [newSizeCharUrl, setNewSizeCharUrl] = useState('');
  console.log('🚀 ~ CrawlData ~ newSizeCharUrl:', newSizeCharUrl);

  const handleAddImageSizeChart = () => {
    if (newSizeCharUrl.trim() !== '') {
      setListSizeCharUrl([...listSizeCharUrl, { url: newSizeCharUrl }]);
      setNewSizeCharUrl('');
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImagesSizeChart = [...listSizeCharUrl];
    updatedImagesSizeChart.splice(index, 1);
    setListSizeCharUrl(updatedImagesSizeChart);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOpen = () => {
    if (
      selectedColors.length === 0 ||
      selectedSizes.length === 0 ||
      selectedTypes.length === 0
    ) {
      setErrorMessage('Bạn phải chọn màu, kích thước, và loại áo');
    } else {
      setErrorMessage('');
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (category) => {
    setModalType(category);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setNewValue('');
  };

  const handleModalSave = () => {
    if (modalType === 'color') {
      setListColors([...listColors, newValue]);
    } else if (modalType === 'size') {
      setListSizes([...listSizes, newValue]);
    } else if (modalType === 'category') {
      setListTypes([...listTypes, newValue]);
      setDimensions({
        ...dimensions,
        [newValue]: { length: '', width: '', height: '', weight: '' }
      });
    }
    handleModalClose();
  };

  const handleCheckboxChange = (category, value) => {
    let updatedVariants = [...variantData];
    if (category === 'color') {
      const newSelectedColors = selectedColors.includes(value)
        ? selectedColors.filter((item) => item !== value)
        : [...selectedColors, value];
      setSelectedColors(newSelectedColors);

      updatedVariants = selectedTypes.flatMap((type) =>
        newSelectedColors.flatMap((color) =>
          selectedSizes.map((size) => ({
            category: type,
            color,
            size,
            ...dimensions[type],
            price: sizePrices[size] || ''
          }))
        )
      );
    } else if (category === 'size') {
      const newSelectedSizes = selectedSizes.includes(value)
        ? selectedSizes.filter((item) => item !== value)
        : [...selectedSizes, value];
      setSelectedSizes(newSelectedSizes);

      updatedVariants = selectedTypes.flatMap((type) =>
        selectedColors.flatMap((color) =>
          newSelectedSizes.map((size) => ({
            category: type,
            color,
            size,
            ...dimensions[type],
            price: sizePrices[size] || ''
          }))
        )
      );
    } else if (category === 'category') {
      const newSelectedTypes = selectedTypes.includes(value)
        ? selectedTypes.filter((item) => item !== value)
        : [...selectedTypes, value];
      setSelectedTypes(newSelectedTypes);

      updatedVariants = newSelectedTypes.flatMap((type) =>
        selectedColors.flatMap((color) =>
          selectedSizes.map((size) => ({
            category: type,
            color,
            size,
            ...dimensions[type],
            price: sizePrices[size] || ''
          }))
        )
      );
    }

    setVariantData(updatedVariants);
  };

  const removeColorField = (index) => {
    const newColors = [...listColors];
    newColors.splice(index, 1);
    setListColors(newColors);
  };

  const removeSizeField = (index) => {
    const newSizes = [...listSizes];
    newSizes.splice(index, 1);
    setListSizes(newSizes);
  };

  const removeTypeField = (index) => {
    const newTypes = [...listTypes];
    const removedType = newTypes.splice(index, 1)[0];
    setListTypes(newTypes);
    const newDimensions = { ...dimensions };
    delete newDimensions[removedType];
    setDimensions(newDimensions);
  };

  const handleLinkChange = (event) => {
    setCrawlLink(event.target.value);
    fetchDetailProduct(event.target.value);
  };

  const [detailProduct, setDetailProduct] = useState([]);
  const fetchDetailProduct = async (link) => {
    try {
      const response = await getDetailProduct(token, {
        input: link
      });
      setDetailProduct(response.data.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    _uploadFile(file);
  };

  const _uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('excel', file);
    const res = await uploadFile(token, formData);
    setFileNameExcel(res.data.fileName);
    return res;
  };

  // Biến trạng thái mới để lưu dữ liệu biến thể
  const [variantData, setVariantData] = useState([]);
  console.log('🚀 ~ CrawlData ~ variantData:', variantData);

  const [linkDoawload, setLinkDoawload] = useState('');
  console.log('🚀 ~ CrawlData ~ linkDoawload:', linkDoawload);
  const exportData = async () => {
    const res = await exportExcelData(token, {
      fileName: fileNameExcel,
      productName: title,
      productDescription: markdownValue,
      productImages: urls,
      productSizeChart: newSizeCharUrl,
      data: variantData
    });
    setLinkDoawload(res.data);
  };

  // tải file về

  useEffect(() => {
    if (linkDoawload) {
      const timer = setTimeout(() => {
        window.open(linkDoawload, '_blank');
      }, 1000);

      return () => clearTimeout(timer); // Cleanup the timer if linkDoawload changes or component unmounts
    }
  }, [linkDoawload]);

  useEffect(() => {
    // Initialize variant data with default values
    const initialVariants = selectedTypes.flatMap((type) =>
      selectedColors.flatMap((color) =>
        selectedSizes.map((size) => ({
          category: type,
          color,
          size,
          ...dimensions[type],
          price: sizePrices[size] || ''
        }))
      )
    );
    setVariantData(initialVariants);
  }, []);

  return (
    <React.Fragment>
      <CssVarsProvider>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: 15,
              fontWeight: 600,
              color: 'green',
              fontStyle: 'italic'
            }}
          >
            Chọn loại Crawl
          </FormLabel>
          <RadioGroup
            defaultValue="link"
            name="controlled-radio-buttons-group"
            orientation="horizontal"
            value={typeInput}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="link" label="Sử dụng link" />
            <Radio value="file" label="Sử dụng file" />
          </RadioGroup>
        </FormControl>

        {typeInput === 'link' ? (
          <Stack direction="row" spacing={2} alignItems="center" paddingTop={2}>
            <Input
              color="success"
              placeholder="Nhập link sản phẩm"
              variant="soft"
              value={crawlLink}
              onChange={handleLinkChange}
            />
          </Stack>
        ) : typeInput === 'file' ? (
          <Stack direction="row" spacing={2} alignItems="center" paddingTop={2}>
            <Button
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              startDecorator={
                <Box>
                  {selectedFile != null ? (
                    <Typography>{selectedFile?.name}</Typography>
                  ) : (
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </SvgIcon>
                  )}
                </Box>
              }
            >
              {selectedFile == null && <Typography>Upload a file</Typography>}

              <VisuallyHiddenInput
                type="file"
                name="file"
                accept=".xlsx"
                onChange={handleFileChange}
              />
            </Button>
          </Stack>
        ) : null}

        {/* Hiển thị áo */}
        <ListProductReview
          detailProduct={detailProduct}
          setCurrentImages={setCurrentImages}
          currentImages={currentImages}
          title={title}
          setTitle={setTitle}
        />
        {/* Chọn màu */}
        <FormLabel
          sx={{
            pt: 3,
            pb: 2,
            fontSize: 15,
            fontWeight: 600,
            color: 'green',
            fontStyle: 'italic'
          }}
        >
          Chọn màu
        </FormLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {listColors.map((color, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Checkbox
                checked={selectedColors.includes(color)}
                onChange={() => handleCheckboxChange('color', color)}
              />
              <Typography>{color}</Typography>
              <Button
                onClick={() => removeColorField(index)}
                variant="outlined"
                color="error"
                size="small"
              >
                <BackspaceIcon sx={{ fontSize: 16, color: 'red' }} />
              </Button>
            </Box>
          ))}
          <Button
            onClick={() => handleAdd('color')}
            variant="outlined"
            color="success"
            size="small"
          >
            Thêm màu
          </Button>
        </Box>

        {/* Chọn size */}
        <FormLabel
          sx={{
            pt: 3,
            pb: 2,
            fontSize: 15,
            fontWeight: 600,
            color: 'green',
            fontStyle: 'italic'
          }}
        >
          Chọn size áo
        </FormLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {listSizes.map((size, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Checkbox
                checked={selectedSizes.includes(size)}
                onChange={() => handleCheckboxChange('size', size)}
              />
              <Typography>{size}</Typography>
              <Input
                type="number"
                placeholder="Nhập giá"
                value={sizePrices[size] || ''}
                onChange={(e) => handleSizePriceChange(size, e)}
                sx={{ ml: 1 }}
              />
              <Button
                onClick={() => removeSizeField(index)}
                variant="outlined"
                color="error"
                size="small"
              >
                <BackspaceIcon sx={{ fontSize: 16, color: 'red' }} />
              </Button>
            </Box>
          ))}
          <Button
            onClick={() => handleAdd('size')}
            variant="outlined"
            color="success"
            size="small"
          >
            Thêm size
          </Button>
        </Box>

        {/* Chọn loại áo */}
        <FormLabel
          sx={{
            pt: 3,
            pb: 2,
            fontSize: 15,
            fontWeight: 600,
            color: 'green',
            fontStyle: 'italic'
          }}
        >
          Chọn loại áo
        </FormLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {listTypes.map((category, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Checkbox
                checked={selectedTypes.includes(category)}
                onChange={() => handleCheckboxChange('category', category)}
              />
              <Typography>{category}</Typography>
              <Button
                onClick={() => removeTypeField(index)}
                variant="outlined"
                color="error"
                size="small"
              >
                <BackspaceIcon sx={{ fontSize: 16, color: 'red' }} />
              </Button>
            </Box>
          ))}
          <Button
            onClick={() => handleAdd('category')}
            variant="outlined"
            color="success"
            size="small"
          >
            Thêm loại áo
          </Button>
        </Box>

        {/* Kích thước cho loại áo */}
        <FormLabel
          sx={{
            pt: 3,
            pb: 2,
            fontSize: 15,
            fontWeight: 600,
            color: 'green',
            fontStyle: 'italic'
          }}
        >
          Kích thước cho loại áo
        </FormLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {selectedTypes.map((category) => (
            <Box key={category} sx={{ width: '100%', mb: 2 }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  backgroundColor: '#bae7ff',
                  color: 'green',
                  p: 1,
                  mb: 2,
                  fontStyle: 'italic'
                }}
              >
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Input
                  type="number"
                  placeholder="Chiều dài"
                  value={dimensions[category].length}
                  onChange={(e) =>
                    handleDimensionChange(category, 'length', e.target.value)
                  }
                  sx={{ width: '20%' }} // Adjust width as needed
                />
                <Input
                  type="number"
                  placeholder="Chiều rộng"
                  value={dimensions[category].width}
                  onChange={(e) =>
                    handleDimensionChange(category, 'width', e.target.value)
                  }
                  sx={{ width: '20%' }} // Adjust width as needed
                />
                <Input
                  type="number"
                  placeholder="Chiều cao"
                  value={dimensions[category].height}
                  onChange={(e) =>
                    handleDimensionChange(category, 'height', e.target.value)
                  }
                  sx={{ width: '20%' }} // Adjust width as needed
                />
                <Input
                  type="number"
                  placeholder="Cân nặng"
                  value={dimensions[category].weight}
                  onChange={(e) =>
                    handleDimensionChange(category, 'weight', e.target.value)
                  }
                  sx={{ width: '20%' }} // Adjust width as needed
                />
              </Box>
            </Box>
          ))}
        </Box>

        {errorMessage && (
          <Box
            sx={{
              backgroundColor: '#ffd666',
              display: 'flex',
              alignItems: 'center',
              paddingInline: 2,
              marginBlock: 2,
              borderRadius: 6
            }}
          >
            <WarningIcon sx={{ color: '#f5222d' }} />
            <Alert
              severity="error"
              sx={{ color: '#f5222d', backgroundColor: '#ffd666' }}
            >
              {errorMessage}
            </Alert>
          </Box>
        )}

        {/* Size Chart */}
        <FormLabel
          sx={{
            pt: 3,
            fontSize: 15,
            fontWeight: 600,
            color: 'green',
            fontStyle: 'italic'
          }}
        >
          {' '}
          Size Chart
        </FormLabel>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Input
            placeholder="New Image URL"
            value={newSizeCharUrl}
            onChange={(e) => setNewSizeCharUrl(e.target.value)}
            fullWidth
          />
          <Button
            variant="outlined"
            color="success"
            size="small"
            onClick={handleAddImageSizeChart}
          >
            Add
          </Button>
        </Box>
        {newSizeCharUrl && (
          <Box sx={{ width: 150, height: 200, mt: 2 }}>
            <ImageListItem sx={{ width: '100%' }}>
              <img
                srcSet={`${newSizeCharUrl}?w=164&h=164&fit=crop&auto=format&dpr=2& 2x`}
                alt="ảnh size chart"
                loading="lazy"
              />
            </ImageListItem>
          </Box>
        )}

        <Box sx={{ py: 3 }}>
          <FormLabel
            variant="h6"
            sx={{
              pb: 2,
              fontSize: 15,
              fontWeight: 600,
              color: 'green',
              fontStyle: 'italic'
            }}
          >
            Mô tả sản phẩm
          </FormLabel>
          <Box sx={{ height: 300 }}>
            <MDEditor
              value={markdownValue}
              onChange={setMarkdownValue}
              previewOptions={{
                rehypePlugins: [[rehypeRaw]],
                remarkPlugins: [remarkGfm]
              }}
              height={300}
            />
          </Box>
        </Box>

        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 300,
              p: 2,
              borderRadius: 'md',
              boxShadow: 'lg'
            }}
          >
            <ModalClose
              variant="plain"
              sx={{ m: 1 }}
              onClick={handleModalClose}
            />
            <Typography
              component="h2"
              level="h5"
              fontWeight="lg"
              textColor="inherit"
              mb={1}
            >
              Thêm{' '}
              {modalType === 'color'
                ? 'màu'
                : modalType === 'size'
                  ? 'size'
                  : 'loại áo'}
            </Typography>
            <Input
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder={`Nhập ${modalType === 'color' ? 'màu' : modalType === 'size' ? 'size' : 'loại áo'}`}
              sx={{ mt: 2, mb: 2 }}
            />
            <Button
              onClick={handleModalSave}
              variant="outlined"
              color="success"
            >
              Lưu
            </Button>
          </Sheet>
        </Modal>

        <FormControl>
          <FormLabel
            sx={{
              pt: 3,
              fontSize: 15,
              fontWeight: 600,
              color: 'green',
              fontStyle: 'italic'
            }}
          >
            File Excel mẫu
          </FormLabel>
          <Stack direction="row" spacing={2} alignItems="center" paddingTop={2}>
            <Button
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              startDecorator={
                <Box>
                  {selectedFile != null ? (
                    <Typography>{selectedFile?.name}</Typography>
                  ) : (
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </SvgIcon>
                  )}
                </Box>
              }
            >
              {selectedFile == null && <Typography>Upload a file</Typography>}

              <VisuallyHiddenInput
                type="file"
                name="file"
                accept=".xlsx"
                onChange={handleFileChange}
              />
            </Button>
          </Stack>
        </FormControl>
        <Button sx={{ mt: 3 }} onClick={exportData}>
          Xuất file
        </Button>
      </CssVarsProvider>
    </React.Fragment>
  );
}
